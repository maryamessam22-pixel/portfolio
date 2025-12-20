import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ArticleDetails.css";
import SEO from '../components/common/SEO';
import Arrow from '../components/common/Arrow';
import { supabase } from '../config/Supabase';

const ArticleDetails = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArticle() {
            const { data, error } = await supabase
                .from('Blogs')
                .select('content, cover_img, blog_title')
                .eq('id', articleId)
                .single();

            if (error) {
                console.error("Error fetching article:", error);
            } else {
                setArticle(data);
            }
            setLoading(false);
        }

        if (articleId) {
            fetchArticle();
        }
    }, [articleId]);

    if (loading) return <div className="loading-center"><p>Loading...</p></div>;
    if (!article) return <h1>Article not found</h1>;

    // Helper to extract content safely
    const { content } = article;
    const introduction = content?.introduction;
    const conclusion = content?.conclusion;
    // Handle mainSections vs sections (different naming in JSON)
    const sections = content?.mainSections || content?.sections || [];
    const tableOfContents = content?.tableOfContents || [];

    return (
        <>
            <SEO
                title={`Article | ${article.blog_title || 'Details'}`}
                description={introduction?.text || "Article details"}
            />
            <Navbar />
            <Arrow />

            <div className="article-detail-page">
                <header className="detail-header">
                    <Link to="/articles" className="project-details-back">
                        <span aria-hidden="true">←</span> Back
                    </Link>

                    <h1 className="detail-header-title">{article.blog_title}</h1>
                    <div className="header-placeholder"></div>
                </header>

                {article.cover_img && (
                    <img src={article.cover_img} alt={article.blog_title} className="detail-hero-image" />
                )}

                <main className="detail-main-content">

                    {/* Table of Contents */}
                    {tableOfContents.length > 0 && (
                        <section className="detail-section">
                            <h2 className="detail-h2">Table of Contents</h2>
                            <ol className="detail-toc-list">
                                {tableOfContents.map((item, index) => (
                                    <li key={index}>
                                        {/* Handle if item is string or object */}
                                        {typeof item === 'string' ? item : (item.text || item.title)}
                                    </li>
                                ))}
                            </ol>
                        </section>
                    )}

                    {/* Introduction */}
                    {introduction && (
                        <section className="detail-section">
                            {introduction.title && <h2 className="detail-h2">{introduction.title}</h2>}
                            <p>{introduction.text}</p>
                        </section>
                    )}

                    {/* Sections */}
                    {sections.length > 0 && (
                        <section className="detail-section">
                            {sections.map((section, index) => (
                                <div key={index} className="detail-friend-item">
                                    {section.name && <h3 className="detail-h3">{section.name}</h3>}

                                    {(section.link || section.keyword) && (
                                        <p className="detail-friend-meta">
                                            {section.link &&
                                                <span>Link: <a href={`http://${section.link}`} target="_blank" rel="noopener noreferrer">{section.link}</a></span>
                                            }
                                            {section.keyword &&
                                                <span>Keyword: {section.keyword}</span>
                                            }
                                        </p>
                                    )}
                                    <p>{section.description}</p>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Conclusion */}
                    {conclusion && (
                        <section className="detail-section">
                            {/* Check if conclusion is an object with title/text or just a string */}
                            <h2 className="detail-h2">{typeof conclusion === 'object' ? conclusion.title : 'Conclusion'}</h2>
                            <p>{typeof conclusion === 'object' ? conclusion.text : conclusion}</p>
                        </section>
                    )}

                </main>
            </div>

            <Footer />
        </>
    );
};

export default ArticleDetails;