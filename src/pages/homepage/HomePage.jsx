import React from 'react';
import './HomePage.css';
import logo from "../../assets/logo-white.png";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <section>
            <div className="homepage-container">
                <img src={logo} alt="Company logo"/>
                <div className="homepage-content-container">
                    <h2>BlOgventure de beste website voor uw Blogs! </h2>
                    <p>BlOgventure is een medium waar iedereen zijn verhaal kwijt kan, want iedereen heeft immers een verhaal dat gehoord mag worden.
                    Dus wil je jouw verhaal vertellen en gebruik maken van ons platform, klik dan <Link to="/nieuwepost">hier</Link> om een nieuwe post te plaatsen.</p>
                    <p>Veel schrijf plezier !!!</p>
                </div>
            </div>
        </section>
    );
}

export default HomePage;