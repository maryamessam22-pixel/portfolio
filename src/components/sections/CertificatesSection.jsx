import React from "react";
import "./CertificatesSection.css";

import digitopiaCertificate from "../../assets/certificates/digitopia-2025.jpeg";
import hanySaadCertificate from "../../assets/certificates/hany-saad-experience.jpeg";
import kgoingCertificate from "../../assets/certificates/kgoing-experience.jpeg";
import sprintupCertificate from "../../assets/certificates/sprintup-flutter.jpeg";

const certificates = [
  {
    title: "Design & Creative Team Internship",
    organization: "KGoing Co.",
    detail: "Two-month internship · July 1–August 31, 2025",
    type: "Experience",
    image: kgoingCertificate
  },
  {
    title: "Media Department Internship",
    organization: "Hany Saad Innovations",
    detail: "Internship · July 29–August 22, 2024",
    type: "Experience",
    image: hanySaadCertificate
  },
  {
    title: "Mobile Development with Flutter",
    organization: "SprintUp",
    detail: "40-hour learning program · ID: SPR-R6F7D8",
    type: "Training",
    image: sprintupCertificate
  },
  {
    title: "Digital Arts & Games Competition",
    organization: "Digitopia · 2025",
    detail: "Completed stage two of the inaugural competition.",
    type: "Recognition",
    image: digitopiaCertificate
  }
];

const CertificatesSection = () => (
  <section className="certificates-section" id="certificates" aria-labelledby="certificates-title">
    <div className="certificates-heading">
      <p className="certificates-eyebrow">Professional development</p>
      <h2 id="certificates-title">Certificates & Recognition</h2>
      <p>A selection of internships, specialized training, and achievements from my creative journey.</p>
    </div>

    <div className="certificates-grid">
      {certificates.map((certificate) => (
        <article className="certificate-card" key={certificate.title}>
          <a
            className="certificate-preview"
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View full certificate: ${certificate.title}`}
          >
            <img src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy" />
            <span className="certificate-type">{certificate.type}</span>
            <span className="certificate-open">View certificate ↗</span>
          </a>
          <div className="certificate-info">
            <p className="certificate-organization">{certificate.organization}</p>
            <h3>{certificate.title}</h3>
            <p className="certificate-detail">{certificate.detail}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default CertificatesSection;
