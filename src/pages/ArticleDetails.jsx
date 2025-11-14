import React from 'react';
import { useParams, Link } from "react-router-dom";
import ArticleData from "../data/ArticleData";
import Navbar from "../components/Navbar"; // Assuming you have this
import Footer from "../components/Footer"; // Assuming you have this
import GlassyCircles from "../components/GlassyCircles"; // Assuming you have this

// --- استيراد ملف الـ CSS الجديد ---
import "./ArticleDetails.css"; 

const ArticleDetails = () => {
    const { articleId } = useParams();
    const article = ArticleData.find(a => a.id === articleId);

    if (!article) {
        return <h1>Article not found</h1>;
    }

    // ---  تم إزالة الـ IF من هنا ---
    // --- الكود ده دلوقتي هيشتغل مع كل المقالات ---

    return (
        <>
            <Navbar />
            
            <div className="article-detail-page">
                {/* 1. Header with Back Arrow and Title */}
                <header className="detail-header">
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

                    {/* --- التعديل هنا --- */}
                    {/* Main Content Sections (was Friends List) */}
                    <section className="detail-section">
                        {/* (mainSections) بدل (friendsList) بنلف على */}
                        {article.mainSections.map((section, index) => (
                            <div key={index} className="detail-friend-item">
                                {/* (name) بنستخدم */}
                                <h3 className="detail-h3">{section.name}</h3>
                                
                                {/* (link) و (keyword)  الكود ده بيعرض الـ  */}
                                {/* لو هما موجودين بس */}
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
                                
                                {/* (description) بنستخدم */}
                                <p>{section.description}</p>
                            </div>
                        ))}
                    </section>
                    {/* --- نهاية التعديل --- */}


                    {/* Conclusion */}
                    <section className="detail-section">
                        <h2 className="detail-h2">Conclusion</h2>
                        <p>{article.conclusion}</p>
                    </section>

                </main>
            </div>
            
            {/* <GlassyCircles />  */}
            {/* شيلت الكومنت من عليها عشان غالباً انت محتاجها */}
            
            <Footer />
        </>
    );
};

export default ArticleDetails;

