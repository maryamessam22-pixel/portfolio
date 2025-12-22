import React from 'react';
import { Link } from 'react-router-dom';
import "./ArticleCard.css"; 

const ArticleCard = ({
    id,
    img,
    title,
    date,
    category,
    status,
    views,
    published,
    ...props
}) => {
    
    return (
        <div className="article-card" {...props}>
            <img src={img} alt={title} className="article-image" />

            <div className="article-content">
                <h3 className="article-card-title">
                    {title}
                </h3>

                <Link
                    to={`/articles/${id}`}
                    className="article-card-button"
                >
                    View article details
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;
