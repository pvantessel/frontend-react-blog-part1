import React from 'react';
import './NotFound.css';
import logo from "../../assets/logo-white.png";
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <section>
            <div className="notfound-container">
                <img src={logo} alt="Company logo"/>

                <div className="notfound-content-container">
                    <h2>Sorry, the web page you try to visit does not exist 🥹</h2>
                    <p><Link to="/">Take me back to the HomePage.</Link></p>
                </div>
            </div>


        </section>
    );
}

export default NotFound;