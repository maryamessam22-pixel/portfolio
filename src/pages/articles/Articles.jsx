import React, { useState, useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import GlassyCircles from '../../components/ui/GlassyCircles';
import "./Articles.css";
import Arrow from '../../components/common/Arrow';
import Footer from '../../components/layout/Footer';
import { Link } from "react-router-dom";
import SEO from '../../components/common/SEO';
import { supabase } from '../../config/Supabase';

const Articles = () => {
    const [blogsData, setBlogsData] = useState([]);
    const [pageInfo, setPageInfo] = useState({ title: 'BLOGS', subtitle: 'DIVE INTO MY WORLD OF DESIGN, CREATIVITY, AND INNOVATION.' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {

            const { data: articles, error: articlesError } = await supabase
                .from("Blogs")
                .select("*");

            if (articlesError) {
                console.error("Error fetching blogs:", articlesError);
            } else {
                setBlogsData(articles);

                if (articles && articles.length > 0) {
                    const infoSource = articles[0];
                    setPageInfo({
                        title: infoSource.page_title || 'BLOGS',
                        subtitle: infoSource.page_subtitle || 'DIVE INTO MY WORLD OF DESIGN, CREATIVITY, AND INNOVATION.'
                    });
                }
            }

            setLoading(false);
        }

        fetchData();
    }, []);


    if (loading) {
        return (
            <div className="loading-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <SEO
                title="Mariam Farid – UI/UX Design Articles & Case Studies"
                description="Read UI/UX articles by Mariam Farid covering user experience, user interface design, wireframes, prototypes, usability, case studies, UX research, personas, journey mapping, visual design, product design, and modern design practices. Keywords: UI UX designer, UX design, UI design, wireframes, prototypes, usability testing, design thinking."
            />

            <Navbar />
            <Arrow />

            <section className="articles-section">
                <h1 className="articles-title">{pageInfo.title}</h1>
                <p className="articles-subtitle">
                    {pageInfo.subtitle}
                </p>

                <div className="articles-container">
                    {blogsData.map((article) => (
                        <div className="article-card" key={article.id}>
                            <img
                                src={article.thumbnail_image}
                                alt={article.blog_title}
                                className="article-image"
                            />

                            <div className="article-content">
                                <h3 className="article-card-title">
                                    {article.blog_title}
                                </h3>

                                <Link
                                    to={`/articles/${article.id}`}
                                    className="article-card-button"
                                >
                                    View article details
                                </Link>
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