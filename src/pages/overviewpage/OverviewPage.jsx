import React from 'react';
import './OverviewPage.css';
import blogItems from '../../constants/data.json';
import {Link} from 'react-router-dom';
import blogpost from "../../assets/blogpost.jpeg";


function OverviewPage() {
    return (
        <section>
            <div className="overview-container">
                <div className="blogpost-counter-container">
                    <img src={blogpost} alt="Blogpost image"/>

                    <div className="blogpost-counter">
                        <p>Aantal posts op BlOgventure</p>
                        <p className="counter-color">{blogItems.length}</p>
                    </div>
                </div>

                <ul className="blog-card">
                    {blogItems.map((blogItem) => {
                        return <li className="blog-item-det" key={blogItem.id} >
                                    <h4><Link to={`/postdetails/${blogItem.id}`}>{blogItem.title}</Link> ({blogItem.author})</h4>
                                    <p>{blogItem.comments} reacties - {blogItem.shares} keer gedeeld</p>
                              </li>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default OverviewPage;