import React from "react";
import { Link } from "react-router-dom";
import "./Errorpage.css";
import error from "../assets/error.png";

export default function Errorpage() {
  return (
    <div className="error-container">

      
      <div className="header-actions">
        <a href="errorar" className="home-button small-btn">
          AR
        </a>
      </div>

      <img
        src={error}
        alt="Error"
        className="error-img"
      />

      
      <p className="error-text error-margin">Error 404!</p>

      <h1 className="error-code">404</h1>

 
      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </div>
  );
}


