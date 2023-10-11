import React, {useEffect, useState} from 'react';
import './OverviewPage.css';
import {Link} from 'react-router-dom';
import blogpost from "../../assets/blogpost.jpeg";
import axios from "axios";

function OverviewPage() {

    const [displayPosts, setDisplayPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await axios.get('http://localhost:3000/posts');
                setDisplayPosts(response.data);
                setError(null);
            } catch (e) {
                console.error(e);
                setError('Data ophalen is op dit moment even niet mogelijk, probeert u het later nog eens.');
            }
        }
        // void prevents "curly line" below function name.
        void getAllPosts();
    }, []);

    return (
        <section>
            <div className="overview-container">
                <div className="blogpost-counter-container">
                    <img src={blogpost} alt="Blogpost image"/>

                    <div className="blogpost-counter">
                        <p>Aantal posts op BlOgventure</p>
                        <p className="counter-color">{displayPosts.length}</p>
                    </div>
                </div>

                {error ? (
                    <p className="displayErrorOverviewPage">{error}</p>
                ) : (
                    <ul className="blog-card">
                        {displayPosts.length > 0 ? (
                            displayPosts.map((displayPost, index) => (
                                <li className="blog-item-det" key={index}>
                                    <h4>
                                        <Link to={`/postdetails/${displayPost.id}`}>
                                            {displayPost.title}
                                        </Link>{' '}
                                        ({displayPost.author})
                                    </h4>
                                    <p>
                                        {displayPost.comments} reacties - {displayPost.shares} keer
                                        gedeeld
                                    </p>
                                </li>
                            ))
                        ) : (
                            <p className="displayNoPosts">Op dit moment zijn er nog geen posts beschikbaar.</p>
                        )}
                    </ul>
                )}

            </div>
        </section>
    );
}

export default OverviewPage;
