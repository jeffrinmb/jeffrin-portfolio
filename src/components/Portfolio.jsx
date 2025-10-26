import React from 'react';
import SectionTitle from './SectionTitle';
import SubsectionHeading from './SubsectionHeading';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Career Development Portals',
      company: 'Experion Technologies',
      period: 'Jan 2022 - Present',
      description: 'Leading a team of Backend Developers. Integrating AI Solutions to the Application. Developing business critical solutions for client.'
    },
    {
      title: 'Insurance Management Portal',
      company: 'TCS',
      period: 'Jul 2021 - Jan 2022',
      description: 'Created solution for online document generation from Portal. Completed business critical solution in short time frame.'
    },
    {
      title: 'Travel Management Portal',
      company: 'TCS',
      period: 'Jan 2020 - Jun 2021',
      description: 'Portal for submitting and reimbursing travel expenses. Managed Travel & Expense claims for Annual Meetings.'
    },
    {
      title: 'Capacity Development Portal',
      company: 'TCS',
      period: 'Nov 2018 - Dec 2019',
      description: 'Portal for registering for training programs. Upgraded Application from older .NET version to latest.'
    }
  ];

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-card-header">
                <SubsectionHeading variant="portfolio">{project.title}</SubsectionHeading>
                <span className="project-company">{project.company}</span>
              </div>
              <span className="project-period">{project.period}</span>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
