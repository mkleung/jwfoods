import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import MealServices from './components/MealServices'
import Calculator from './components/Calculator'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

    // This function runs when the page first loads
   
    useEffect(() => {
            // show navigation on mobile screens

    if (window.matchMedia('screen and (max-width: 768px)').matches) {

        var elementNav = document.getElementById("navbarResponsive");
        elementNav.classList.add("show");

        var elementLogo = document.getElementById("navbar-logo");
        elementLogo.classList.remove("navbar-logo-white");
    }
    }, [])


    return (
        <div className="App">
            <Helmet>
                <title>JW Foods</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <Navbar />
            <Header />
            <About />
            <MealServices />
            <Calculator />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
