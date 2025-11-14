import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import GlassyCircles from './../components/GlassyCircles';
import "./Articles.css";
import Arrow from '../components/Arrow';
import Footer from '../components/Footer';
import Artc_1 from '../assets/Artc_1.png'; 
import Artc_2 from '../assets/Artc_2.png';

const Articles = () => {
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

                    {/* Card 1 */}
                    <div className="article-card" id="article-card-1">
                        <img src={Artc_1} alt="Article 1" className="article-image" />
                        <div className="article-content">
                            <h3 className="article-card-title">
                                What Does a UI/UX Designer Do? Roles, Skills, and Essential Tasks
                            </h3>
                            <a href="#" className="article-card-button">
                                View article details
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="article-card" id="article-card-2">
                        <img src={Artc_2} alt="Article 2" className="article-image" />
                        <div className="article-content">
                            <h3 className="article-card-title">
                                My creative friends
                            </h3>
                            <a href="#" className="article-card-button">
                                View article details
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <GlassyCircles />
            <Footer />
        </>
    );
};

export default Articles;
