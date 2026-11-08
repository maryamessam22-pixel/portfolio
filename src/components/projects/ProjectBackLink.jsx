import React from "react";
import { Link } from "react-router-dom";
import "./ProjectBackLink.css";

const ProjectBackLink = () => (
  <Link className="project-back-link" to="/projects">
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
    <span>Back to Projects</span>
  </Link>
);

export default ProjectBackLink;
