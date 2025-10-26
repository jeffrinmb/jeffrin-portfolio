import React from 'react';
import SectionTitle from './SectionTitle';
import SubsectionHeading from './SubsectionHeading';
import TimelineHeading from './TimelineHeading';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Lead Software Engineer',
      company: 'Experion Technologies',
      period: 'January 2022 - Present',
      location: 'Kochi, India',
      description: [
        'Lead and mentor a team of backend developers, improving team productivity and code quality',
        'Spearhead API and application development in NestJS/Node.js, delivering scalable, high-performance backend systems',
        'Design and optimize RESTful and Web APIs, resulting in faster response times and reliable integrations',
        'Implement solutions using Cassandra, MongoDB, ElasticSearch, Kafka, ensuring high availability',
        'Integrating AI Solutions in Code Development reducing the development effort up to 25%'
      ]
    },
    {
      title: 'Systems Engineer',
      company: 'Tata Consultancy Services',
      period: 'September 2018 - January 2022',
      location: 'Kochi, India',
      description: [
        'Developed and maintained web applications using ASP.NET, ADO.NET, ASP.NET MVC, and Web Services',
        'Designed and optimized Oracle SQL and Microsoft SQL databases',
        'Analyzed user requirements, identified issues, and implemented fixes, reducing reported defects by 25-30%',
        'Contributed to application design and functionality enhancements'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <SubsectionHeading variant="timeline">{exp.title}</SubsectionHeading>
                    <TimelineHeading variant="timeline-header">{exp.company}</TimelineHeading>
                  </div>
                  <div className="timeline-meta">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="education-section">
          <SubsectionHeading variant="education">Education</SubsectionHeading>
          <div className="education-card">
            <TimelineHeading variant="education">Bachelor of Technology</TimelineHeading>
            <p className="degree">Electronics & Communication Engineering</p>
            <p className="institution">Mar Athanasius College of Engineering</p>
            <div className="education-meta">
              <span>August 2014 - May 2018</span>
              <span>CGPA: 8.28 (First Class with Honors)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
