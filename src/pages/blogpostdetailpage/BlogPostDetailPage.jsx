import React, { useState, useEffect } from 'react';
import './BlogPostDetailPage.css';
import { Link, useParams } from 'react-router-dom';
import formatDateString from '../../helpers/formatDateTime.jsx';
import axios from 'axios';

function BlogPostDetailPage() {
    const {id} = useParams();
    const [showDetails, setShowDetails] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getPostDetails() {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                const onePost = response.data;

                if (Object.keys(onePost).length > 0) {
                    setShowDetails(onePost);
                    setError(null);
                } else {
                    setError('Geen gegevens beschikbaar voor dit ID');
                }
            } catch (e) {
                console.error(e);
                setError('Data ophalen is op dit moment even niet mogelijk, probeert u het later nog eens.');
            }
        }
        getPostDetails();
    }, [id]);

    const { title, readTime, subtitle, author, created, content, comments, shares } = showDetails;

    return (
        <section className="blogpost-detail-container">
            <div className="blogpost-detail-blogpost-container">
                {error ? (
                    <p className="displayErrorDetailPage">{error}</p>
                ) : (
                    <>
                        <h2>{title} ({readTime} minuten)</h2>
                        <h3>{subtitle}</h3>
                        <p>Geschreven door {author} op {formatDateString(created)}</p>
                        <p>{content}</p>
                        <p><em>{comments} reacties - {shares} keer gedeeld</em></p>
                        <Link to="/overzicht">
                            <p>Ga terug naar het overzicht van alle Blog posts</p>
                        </Link>
                    </>
                )}
            </div>
        </section>
    );
}

export default BlogPostDetailPage;
