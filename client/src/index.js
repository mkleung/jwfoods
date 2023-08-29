import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';



// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/styles.css";
import "./styles/custom.css";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./js/scripts.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

