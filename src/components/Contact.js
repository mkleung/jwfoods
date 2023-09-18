import React from 'react';

const Contact = () => (
    <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                    <h2 className="mt-0">Contact</h2>
                    <hr className="divider" />
                    
                </div>
            </div>
            <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div className="col-lg-6">
                    <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=2201+Brimley+Road+Unit+1,+Scarborough,+ON+M1S+4N7&amp;z=14&amp;output=embed"></iframe>
                </div>
                <div className="col-lg-4">
                    
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="form-floating mb-3">
                            <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            <label htmlFor="name">Name</label>
                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                            <label htmlFor="email">Email</label>
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                            <label htmlFor="message">Message</label>
                            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        <div className="text-center">
                            <button className="btn btn-primary btn-xl w-100" id="submitButton" type="submit">Submit</button>
                        </div>
                    </form>
                    <div className="mt-3 text-center">M-F: 9AM-6PM // SAT: 10AM-4PM<br />SUN: CLOSED<br /><div>+1 (416) 298-1350</div></div>
                </div>
            </div>
            
        </div>
    </section>
)
export default Contact;