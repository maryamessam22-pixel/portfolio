import React from 'react';
import { useParams, Link } from "react-router-dom";
import ArticleData from "../data/ArticleData";
import Navbar from "../components/Navbar"; // Assuming you have this
import Footer from "../components/Footer"; // Assuming you have this
import GlassyCircles from "../components/GlassyCircles"; // Assuming you have this
import "./ArticleDetails.css"

// --- استيراد ملف الـ CSS الجديد ---
import "./ArticleDetails.css"; 

const ArticleDetails = () => {
    const { articleId } = useParams();
    const article = ArticleData.find(a => a.id === articleId);

    if (!article) {
        return <h1>Article not found</h1>;
    }

 
    if (article.id !== "creative-friends") {
        return (
            <>
                <Navbar />
                <section className="article-details-section-simple">
                    {/* <Link to="/articles" className="back-btn">← Back to Articles</Link> */}
                   <Link to="/articles" className="project-details-back">
							<span aria-hidden="true">←</span> Back
						</Link>

                    <h1 className="details-title">{article.title}</h1>
                    <img src={article.image} alt={article.title} className="details-image" />
                    <div className="details-content">
                        {article.content.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                    </div>
                </section>
                <Footer />
            </>
        );
    }


    return (
        <>
            <Navbar />
            
            <div className="article-detail-page">
                {/* 1. Header with Back Arrow and Title */}
                <header className="detail-header">
                    {/* <Link to="/articles" className="back-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#1F0D37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link> */}


                    <Link to="/articles" className="project-details-back">
							<span aria-hidden="true">←</span> Back
						</Link>


                    <h1 className="detail-header-title">{article.title}</h1>
                    <div className="header-placeholder"></div> {/* To center the title */}
                </header>

                {/* 2. Hero Image */}
                <img src={article.image} alt={article.title} className="detail-hero-image" />

                {/* 3. Main Content Area (Purple) */}
                <main className="detail-main-content">
                    
                    {/* Table of Contents */}
                    <section className="detail-section">
                        <h2 className="detail-h2">Table of Contents</h2>
                        <ol className="detail-toc-list">
                            {article.tableOfContents.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </section>

                    {/* Introduction */}
                    <section className="detail-section">
                        <h2 className="detail-h2">{article.introduction.title}</h2>
                        <p>{article.introduction.text}</p>
                    </section>

                    {/* Friends List */}
                    <section className="detail-section">
                        {article.friendsList.map((friend, index) => (
                            <div key={index} className="detail-friend-item">
                                <h3 className="detail-h3">{`${index + 1}. ${friend.name}`}</h3>
                                <p className="detail-friend-meta">
                                    <span>Link: <a href={`http://${friend.link}`} target="_blank" rel="noopener noreferrer">{friend.link}</a></span>
                                    <span>Keyword: {friend.keyword}</span>
                                </p>
                                <p>{friend.description}</p>
                            </div>
                        ))}
                    </section>

                    {/* Conclusion */}
                    <section className="detail-section">
                        <h2 className="detail-h2">Conclusion</h2>
                        <p>{article.conclusion}</p>
                    </section>

                </main>
            </div>
{/* <div className='glass'>
<GlassyCircles />
</div>
             */}
            <Footer />
        </>
    );
};

export default ArticleDetails;

