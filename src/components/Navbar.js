import React from 'react';
import logo from '../assets/img/download.png'
import Scrollspy from 'react-scrollspy'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#page-top">
                <img id="navbar-logo" className="img-fluid navbar-logo navbar-logo-white" src={logo} alt="logo" />
            </a>
            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
            aria-controls="navbarResponsive" aria-expanded="false" 
            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <Scrollspy
                    items={['header', 'about', 'services', 'calculator', 'contact']}
                    currentClassName="active"
                    className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link" href="#header">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#calculator">Calculator</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </Scrollspy>
            </div>
        </div>
    </nav>
)
export default Navbar;