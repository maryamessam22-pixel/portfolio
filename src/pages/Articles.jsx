import React from 'react';
import Navbar from '../components/Navbar';
import GlassyCircles from './../components/GlassyCircles';
import "./Articles.css";
import Arrow from '../components/Arrow';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import ArticleData from "../data/ArticleData";

const Articles = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Arrow />

            <section className="articles-section">
                <h1 className="articles-title">BLOGS</h1>
                <p className="articles-subtitle">
                    DIVE INTO MY WORLD OF DESIGN, CREATIVITY, AND INNOVATION.
                </p>

                <div className="articles-container">
                    {ArticleData.map((article) => (
                        <div className="article-card" key={article.id}>
                            <img src={article.image} alt={article.title} className="article-image" />

                            <div className="article-content">
                                <h3 className="article-card-title">
                                    {article.title}
                                </h3>

                                <button 
                                    className="article-card-button"
                                    onClick={() => navigate(`/articles/${article.id}`)}
                                >
                                    View article details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <GlassyCircles />
            <Footer />
        </>
    );
};

export default Articles;
