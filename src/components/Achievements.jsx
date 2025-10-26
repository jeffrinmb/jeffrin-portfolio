import React from 'react';
import SectionTitle from './SectionTitle';
import SubsectionHeading from './SubsectionHeading';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    { title: 'R & R Award - Q1 2023', org: 'Experion Technologies', desc: 'Best Performance in Quarter 1 of 2023' },
    { title: 'Team Spot Awards', org: 'Experion Technologies', desc: 'Multiple awards for proper project deliveries' },
    { title: 'Digital Cadre Associate', org: 'TCS', desc: 'Identified as Digital Cadre Associate after assessments' },
    { title: 'ILP Kudos Award', org: 'TCS', desc: 'Best Performer in Training Period' },
    { title: 'Client Appreciation', org: 'TCS', desc: 'For Developing Fix for High Impact Issue' },
    { title: 'Special Initiative Award', org: 'TCS', desc: 'Recognition for exceptional contributions' },
    { title: 'On The Spot Awards', org: 'TCS', desc: 'Multiple awards for immediate problem solving' },
    { title: 'Best Team Award', org: 'TCS', desc: 'Recognition for outstanding team performance' }
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <SectionTitle>Achievements & Awards</SectionTitle>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <SubsectionHeading variant="achievement">{achievement.title}</SubsectionHeading>
              <p className="achievement-org">{achievement.org}</p>
              <p className="achievement-desc">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
