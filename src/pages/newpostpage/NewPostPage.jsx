import React from 'react';
import './NewPostPage.css';
import logo from "../../assets/logo-white.png";

function NewPostPage() {
    return (
        <main>
            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>NewPostPage!</h1>
            </div>
        </main>
    );
}

export default NewPostPage;