import React from 'react';
import SectionTitle from './SectionTitle';
import SubsectionHeading from './SubsectionHeading';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="contact-content">
          <SubsectionHeading variant="contact">Let's Work Together</SubsectionHeading>
          <p className="contact-description">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to connect!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <strong>Email</strong>
                <a href="mailto:jeffrinmb@gmail.com">jeffrinmb@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <strong>Phone</strong>
                <a href="tel:+918111842399">+91 811 184 2399</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <strong>Location</strong>
                <span>Kochi, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
