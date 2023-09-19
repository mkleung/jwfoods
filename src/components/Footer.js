import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const TestComponent = () => (
    <footer className="bg-dark py-5">
        <div className="container text-center mb-5">
            <div className="row">
                <div className="col  text-center text-muted company">
                    <h5 className="mt-0 text-white">Company</h5>
                    <hr className="divider"></hr>
                    <p className="mb-2">
                        <a className="" href="#about">About Us</a>
                    </p>
                    <p className="mb-2">
                        <a className="" href="#services">Services</a>
                    </p>
                    <p className="mb-2">
                        <a className="" href="#calculator">Calculator</a>
                    </p>

                    <p className="mb-2">
                        <a className="" href="#contact">Contact</a>
                    </p>
                    <p className="mb-2">
                        <a className="" target="_blank" href="http://localhost:5000">Login</a>
                    </p>
                </div>
                <div className="col  text-center text-muted">
                    <h5 className="mt-0 text-white">Sign Up for our newsletter</h5>
                    <hr className="divider"></hr>
                    <p className="text-white-75">And stay informed about our news and events</p>

                    <div className="d-flex justify-content-center">
                        <div className="input-group w-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email address"
                                aria-label="Example input"
                                aria-describedby="button-addon1"
                            />
                            <button className="btn btn-primary" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                Sign Up
                            </button>


                        </div>
                    </div>

                    <div className="row social ps-3 pe-3 text-center text-white mt-4">

                        <div className='col'>
                            <a className="pl-2 pr-2" target="_blank" href="https://www.facebook.com/jandwfoods/">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </div>

                        <div className='col'>
                            <a className="pl-2 pr-2" target="_blank" href="">
                                <FontAwesomeIcon icon={faGoogle} size="2x"></FontAwesomeIcon>
                            </a>
                        </div>

                        <div className='col'>
                            <a className="pl-2 pr-2" target="_blank" href="https://twitter.com/TheMealButler">
                                <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
                            </a>
                        </div>

                        <div className='col'>
                            <a className="pl-2 pr-2" target="_blank" href="https://www.instagram.com/jwfoods/?hl=en">
                                <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
                            </a>
                        </div>

                        <div className='col'>
                            <a className="pl-2 pr-2" target="_blank" href="https://www.youtube.com/channel/UCno0C0V_3s83QkMpoFf3MPw">
                                <FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>
                            </a>
                        </div>

                    </div>

                </div>
                <div className="col small text-center text-muted">
                    <h5 className="mt-0 text-white">Location & Hours</h5>
                    <hr className="divider"></hr>
                    <p className="mb-4 text-white-75">
                        2201 Brimley Rd, Unit #1 <br />
                        Toronto, ON M1S 4N7 <br />
                        (416) 298-1350 <br />
                    </p>
                    <p className="mb-2 text-white-75">
                        MONDAY-FRIDAY: 9am-6pm <br />
                        SATURDAY: 10am-4pm <br />
                        SUNDAY + HOLIDAYS: Closed
                    </p>
                </div>
            </div>
        </div>

        <div className="container px-4 px-lg-5">
            <div className="small text-center text-muted">
                &copy; 2023 J&W Meal Butler. All rights reserved. Powered by Shopify
            </div>
        </div>
    </footer>
)
export default TestComponent;