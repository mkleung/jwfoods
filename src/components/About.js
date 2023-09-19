import React from 'react';
import aboutImg from '../assets/img/about.jpg'

const About = () => (

    <section className="page-section bg-primary py-6" id="about">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">About Us</h2>
                    <hr className="divider divider-light" />

                    <p className="text-white mb-4">
                        J & W Foods was co-founded in 1995 by Stavros Trougakos & William Fehr.</p>

                    <p className="text-white mb-4">
                        They were inspired by their beloved father, George Trougakos, who owned and operated a butcher & grocery store in the heart of downtown Toronto after immigrating to Canada in the early 60's.
                    </p>

                    <div className="collapse" id="collapseExample">

                        <p className="text-white mb-4">
                            As his business grew, he had many restaurant owners asking him to purchase larger quantities of meats and other products for them. Word-of-mouth soon spread and before he knew it he had a significant customer base that he was delivering to.
                        </p>
                        <img className="img-fluid rounded mb-4" src={aboutImg} alt="about" />

                        <p className="text-white mb-4">
                            It soon became evident to him that there was a need in the market for a middle person who could provide quality meats and products at wholesale prices to restaurants.
                        </p>
                        <p className="text-white mb-4">
                            Out of this was birthed Advance Food Products Inc., a restaurant distributing supplier. The new business started in Scarborough, Ontario in 1973 and eventually Advance Food Products became one of the largest independently owned & operated restaurant wholesale distributor in Ontario throughout the 70's, 80's and 90's.
                        </p>

                    </div>

                    {/* <a className="btn btn-light btn-xl" href="#services">Read More</a> */}



                    <a className="btn btn-light btn-xl" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Read More
                    </a>




                </div>
            </div>
        </div>
    </section>
)
export default About;