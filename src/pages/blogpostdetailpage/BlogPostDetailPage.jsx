import React from 'react';
import './BlogPostDetailPage.css';
import {Link, useParams} from 'react-router-dom';
import blogItems from '../../constants/data.json';
import formatDateString from '../../helpers/formatDateTime.jsx';

function BlogPostDetailPage() {
    const {id} = useParams();

    const {title, readTime, subtitle, author, created, content, comments, shares} = blogItems.find((blogItem) => {
        return blogItem.id.toString() === id;
    });

    return (
        <section className="blogpost-detail-container">
            <div className="blogpost-detail-blogpost-container">
                <h2>{title} ({readTime} minuten)</h2>
                <h3>{subtitle}</h3>
                <p >Geschreven door {author} op {formatDateString(created)}</p>

                <p>{content}</p>
                <p><em>{comments} reacties - {shares} keer gedeeld</em></p>

                <Link to="/overzicht" >
                    <p>Ga terug naar het overzicht van alle Blog posts</p>
                </Link>

            </div>
        </section>
    );
}

export default BlogPostDetailPage;