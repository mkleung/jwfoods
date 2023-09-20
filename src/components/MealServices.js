import React from 'react';
import food1 from '../assets/img/food1.jpg'
import food2 from '../assets/img/food2.jpg'
import food3 from '../assets/img/food3.jpg'


const Image = ({ width = '100%', height = '100%', lowResSrc, highResSrc }) => {

    const styles = {
      wrapper: {
        position: 'relative',
        width,
        height,
      },
      image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
    }
    
   return (
     <div style={styles.wrapper}>
      <img src={lowResSrc} style={styles.image} />
      <img src={highResSrc} style={styles.image} />
     </div>
   )
 }


const MealServices = () => (
    <section className="services page-section py-6" id="services">
        <div className="container px-4 px-lg-5">
            <h2 className="text-center mt-0">Services</h2>
            <hr className="divider" />
            <div className="row gx-4 gx-lg-5">
                <div className="col-lg-4 col-md-4 text-center">

                    {/* <Image  width={300}
 height={300}
 lowResSrc='https://via.placeholder.com/150'
 highResSrc={'https://via.placeholder.com/600'}
/> */}

                    <div className="card">
                        <img className="card-img-top" src={food1} alt="Food" />
                        <div className="card-body">
                            <h5 className="card-title">High Quality Groceries</h5>
                            <p className="card-text"> Nutritiously cooked, portion controlled meals, designed to help you build muscle or lose weight</p>
                            <a href="#" className="btn btn-primary">View More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                    <div className="card">
                        <img className="card-img-top" src={food2} alt="Food" />
                        <div className="card-body">
                            <h5 className="card-title">Healthly Cooked Meals</h5>
                            <p className="card-text">Premium Canadian Grass Fed Beef. Raised without the use of antibiotics and hormones.</p>
                            <a href="#" className="btn btn-primary">View More</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 text-center">
                    <div className="card">
                        <img className="card-img-top" src={food3} alt="Food" />
                        <div className="card-body">
                            <h5 className="card-title">Supplements & Vitamins</h5>
                            <p className="card-text">Supplements make an addition as dietary supplement to a good and healthy meal plan.</p>
                            <a href="#" className="btn btn-primary">View More</a>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
)
export default MealServices;