import React from 'react';
import './Navigation.css';
import {Link, NavLink} from 'react-router-dom';
import logosmall from "../../assets/logo-small.png";

function Navigation() {
    return (
        <nav>
            <div className="nav-outer-container">
                <div className="nav-logo-container">
                    <Link to="/">
                        <img
                            className="nav-logo"
                            src={logosmall}
                            alt="Company logo"
                        />
                    </Link>
                    <h3>BlOgventure</h3>
                </div>
                <div className="nav-list-container">
                    <ul>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/">Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/nieuwepost">Nieuwe Post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/overzicht">Alle Posts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;