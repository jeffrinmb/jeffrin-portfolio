import React from "react";
import SectionTitle from "./SectionTitle";
import SubsectionHeading from "./SubsectionHeading";
import "./About.css";

const About = () => {
  const skills = [
    "Node.js",
    "NestJS",
    "JavaScript",
    "TypeScript",
    "ASP.NET",
    "ASP.NET MVC",
    "C#",
    "MongoDB",
    "Cassandra",
    "ElasticSearch",
    "Oracle SQL",
    "PostgreSQL",
    "MySQL",
    "Kafka",
    "REST API",
    "ReactJS",
    "HTML/CSS",
    "Git",
    "Azure (AZ-900)",
    "Team Management",
    "Agile",
    "SonarQube",
    "Postman",
    "Shell Scripting",
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Technical Specialist & Lead Software Engineer with over 7
              years of experience in backend development, specializing in
              Node.js, NestJS, and .NET technologies.
            </p>
            <p>
              My expertise spans across various databases including MongoDB,
              Cassandra, ElasticSearch, MySQL, PostgreSQL, and Oracle SQL. I'm
              passionate about building scalable, high-performance solutions and
              driving innovation through collaboration and mentorship.
            </p>
            <div className="info-grid">
              <div className="info-item">
                <strong>Email:</strong>
                <span>jeffrinmb@gmail.com</span>
              </div>
              <div className="info-item">
                <strong>Phone:</strong>
                <span>+91 811 184 2399</span>
              </div>
              <div className="info-item">
                <strong>Location:</strong>
                <span>Kochi, India</span>
              </div>
            </div>
          </div>
          <div className="skills-container">
            <SubsectionHeading variant="skills">
              Technical Skills
            </SubsectionHeading>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
