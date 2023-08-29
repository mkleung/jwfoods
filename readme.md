
# Installation instructions for Python, Flask, Mongo

pip install flask
pip install flask-login
pip install mongoengine
pip install flask_mongoengine

If case if there is an error with json encoder

pip uninstall Flask  
pip install Flask==2.2.3 


# Installation instructions for React

npx create-react-app
npm install bootstrap
npm install react-scrollspy
npm install react-helmet

npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome


# Run the React Client and Server

Add this code inside package.json of client folder to enable react to use local server

```
"proxy":"http://localhost:5000",
```

# Inside Client use:
npm start

# Inside Server use:
python3 server.py

# Import MongoDB

create JWFOODS db with coefficient
Then import db.json