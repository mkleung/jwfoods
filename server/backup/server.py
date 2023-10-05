from flask import Flask, request, jsonify, redirect, render_template, session, abort, url_for
from flask_login import LoginManager, UserMixin, current_user, login_user, logout_user, login_required
from flask_mongoengine import MongoEngine


app = Flask(__name__)


#/* ------------------------------ LOGIN Lab 11 ------------------------------ */
app.secret_key = 'super secret string' # Required for authentication
login_manager = LoginManager()
login_manager.init_app(app)

users = {'student@ryerson.ca': {'password': 'secret'}}
class User(UserMixin):
	pass


# Login manager loads user by email from mock database
@login_manager.user_loader
def user_loader(email):
	if email not in users:
		return
		
	user = User()
	user.id = email
	return user
	
	
# Login manager loads user by email from form requesting username and password
@login_manager.request_loader
def request_loader(request):
	email = request.form.get('email')
	if email not in users:
		return
		
	user = User()
	user.id = email
	return user


# Login route that is used to access secure routes
@app.route('/login', methods=['GET', 'POST'])
def login():
	if request.method == 'GET':
		return render_template('login.html')
        
	email = request.form['email']
	
	if email in users and request.form['password'] == users[email]['password']:
		user = User()
		user.id = email
		login_user(user)
		return redirect(url_for('protected')) 
	else:		
	    return render_template('index.html', error="Incorrect Login")
			
			
# Protector route hence user must be logged in to access it
@app.route('/protected')
@login_required
def protected():
	email = current_user.id
	data = Coefficient.objects
	return render_template('protected.html', email=email, data=data)


# Handle unauthenticaled users that access protected routes
@login_manager.unauthorized_handler
def unauthorized_handler():
    return render_template('index.html', error="401 Unauthorized Access")

# Logout
@app.route('/logout')
def logout():
    logout_user()
    return render_template('index.html', message="You have been logged out")

#/* ------------------------------ DATABASE ------------------------------ */

app.config['MONGODB_SETTINGS'] = {'db': 'JWFOODS', 'host':'localhost', 'port':27017}
db = MongoEngine()
db.init_app(app)


# Class declaration
class Coefficient(db.Document):
	name = db.StringField()
	value = db.StringField()
	meta = { 'collection': 'coefficient', 'allow_inheritance': False}

# Homepage
@app.route('/', methods=['GET'])
def homepage():
    return render_template('index.html')

# Used by front end
@app.route('/list', methods=['GET'])
def listAllCoefficients():
   data = Coefficient.objects
   return jsonify(data)

# Update a coefficient
@app.route('/coefficient/edit', methods=['POST'])
def editCoefficent():
    message = ""
    nameValue = request.form.get('name')
    newCoefficientValue = request.form.get('NewCoefficient')
    foundCoefficientList = Coefficient.objects(name=nameValue)
    if len(foundCoefficientList) > 0:
        print('Coefficient found')
        coefficientObj = foundCoefficientList.first()
        print(coefficientObj.to_json())
        coefficientObj.value = newCoefficientValue
        coefficientObj.save()
        message = "Update was successful"
    else:
        print("No coefficient found")
        message = "Update failed"
        
    data = Coefficient.objects
    return render_template("protected.html", data=data, message=message, email="student@ryerson.ca")

# Calculator
@app.route('/calculator', methods=['POST'])
def coefficient_calculator():
    distance_val = float(request.json['distance'])
    weight_val = float(request.json['weight'])
    distance_coefficients = Coefficient.objects(name='distance')
    distance_coefficient = distance_coefficients.first()
    distance_coefficient_value = distance_coefficient.value
    print(distance_coefficient_value)
    weight_coefficients = Coefficient.objects(name='weight')
    weight_coefficient = weight_coefficients.first()
    weight_coefficient_value = weight_coefficient.value
    print(weight_coefficient_value)
    delivery_cost = distance_val * float(distance_coefficient_value) + weight_val * float(weight_coefficient_value)
    return  jsonify(delivery_cost)



if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)