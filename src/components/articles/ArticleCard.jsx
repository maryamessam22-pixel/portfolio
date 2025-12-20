import React from 'react';
import { Link } from 'react-router-dom';
import "./ArticleCard.css"; // We might need to move CSS or import from parent, sticking to separate file if possible or rely on global standard

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
    // Use image fallback if needed or handle it gracefully
    // The structure follows what was in Articles.jsx
    return (
        <div className="article-card" {...props}>
            <img src={img} alt={title} className="article-image" />

            <div className="article-content">
                <h3 className="article-card-title">
                    {title}
                </h3>

                {/* 
               If you want to display date/category/views/etc, 
               you can uncomment or add elements here. 
               For now, keeping consistency with previous design.
            */}

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
