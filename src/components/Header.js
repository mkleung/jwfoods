import React from 'react';
import musclemanImg from '../assets/img/muscleman.png'
import musclewomanImg from '../assets/img/musclewoman.png'

import background from "../assets/img/bg-masthead.jpg";




const Header = () => (
    <header className="masthead" id="header" style={{
        backgroundImage: `url(${background})`
    }}>


        <div class="container">
            <div class="row align-items-start">
                <div class="col">
                   
                </div>
                <div class="col-6 test justify-content-center text-center ">
                    <h1 className="text-black font-weight-bold">The Meal Butler</h1>
                    <hr className="divider" />

                    <p className="text-black mb-5">
                        Free Delivery in the GTA with orders over $170
                    </p>
                    {/* <p className="text-white mb-5">
                        <img className="muscle-img" src={musclemanImg} alt="Food" />
                        <img className="muscle-img" src={musclewomanImg} alt="Food" />
                    </p> */}
                    <a className="btn btn-primary btn-xl" href="#services">Find Out More</a>
                </div>
                <div class="col">
                    
                </div>
            </div>

        </div>

        {/* <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">

                <div className='test'>

                    <h1 className="text-black font-weight-bold">The Meal Butler</h1>
                    <hr className="divider" />

                </div>


                <div className="col-lg-8 align-self-baseline">
                    <p className="text-white mb-5">
                        Free Delivery in the GTA with orders over $170
                    </p>
                    <p className="text-white mb-5">
                        <img className="muscle-img" src={musclemanImg} alt="Food" />
                        <img className="muscle-img" src={musclewomanImg} alt="Food" />
                    </p>
                    <a className="btn btn-primary btn-xl" href="#services">Find Out More</a>
                </div> 


            </div>
        </div> */}
    </header>
)
export default Header;