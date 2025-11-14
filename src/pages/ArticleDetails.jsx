import React from 'react';
import { useParams, Link } from "react-router-dom";
import ArticleData from "../data/ArticleData";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
// import GlassyCircles from "../components/GlassyCircles"; 
import "./ArticleDetails.css"; 

const ArticleDetails = () => {
    const { articleId } = useParams();
    const article = ArticleData.find(a => a.id === articleId);

    if (!article) {
        return <h1>Article not found</h1>;
    }


    return (
        <>
            <Navbar />
            
            <div className="article-detail-page">
      
                <header className="detail-header">
                    <Link to="/articles" className="project-details-back">
                        <span aria-hidden="true">←</span> Back
                    </Link>
                    
                    <h1 className="detail-header-title">{article.title}</h1>
                    <div className="header-placeholder"></div> 
                </header>

                <img src={article.image} alt={article.title} className="detail-hero-image" />

              
                <main className="detail-main-content">
                    
                    
                    <section className="detail-section">
                        <h2 className="detail-h2">Table of Contents</h2>
                        <ol className="detail-toc-list">
                            {article.tableOfContents.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </section>

                   
                    <section className="detail-section">
                        <h2 className="detail-h2">{article.introduction.title}</h2>
                        <p>{article.introduction.text}</p>
                    </section>

                 
                    <section className="detail-section">
                        
                        {article.mainSections.map((section, index) => (
                            <div key={index} className="detail-friend-item">
                               
                                <h3 className="detail-h3">{section.name}</h3>
                                
                               
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
                  


                  
                    <section className="detail-section">
                        <h2 className="detail-h2">Conclusion</h2>
                        <p>{article.conclusion}</p>
                    </section>

                </main>
            </div>
            
            {/* <GlassyCircles />  */}
     
            
            <Footer />
        </>
    );
};

export default ArticleDetails;

