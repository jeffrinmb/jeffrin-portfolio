import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    'Node.js', 'NestJS', 'JavaScript', 'TypeScript', 'ASP.NET', 'ASP.NET MVC', 'C#',
    'MongoDB', 'Cassandra', 'ElasticSearch', 'Oracle SQL', 'PostgreSQL', 'MySQL',
    'Kafka', 'REST API', 'ReactJS', 'HTML/CSS', 'Git', 'Azure (AZ-900)',
    'Team Management', 'Agile', 'SonarQube', 'Postman', 'Shell Scripting'
  ];

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
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">JMB</div>
          
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''}>
              <a onClick={() => scrollToSection('experience')}>Experience</a>
            </li>
            <li className={activeSection === 'portfolio' ? 'active' : ''}>
              <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
            </li>
            <li className={activeSection === 'achievements' ? 'active' : ''}>
              <a onClick={() => scrollToSection('achievements')}>Achievements</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>

          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hello, I'm</span>
            <h1 className="hero-title">Jeffrin Mathew Benny</h1>
            <p className="hero-subtitle">Lead Software Engineer</p>
            <p className="hero-description">
              Technical Specialist with 7+ years of backend experience in Node.js/NestJS and .NET. 
              Passionate about building scalable, high-performance solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('portfolio')}>
                View Work
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image-placeholder">
                <span>JMB</span>
              </div>
              <div className="social-links">
                <a href="https://linkedin.com/in/jeffrin-mathew-benny" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/jeffrinmb" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://twitter.com/jeffrin_mb" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a Technical Specialist & Lead Software Engineer with over 7 years of experience 
                in backend development, specializing in Node.js, NestJS, and .NET technologies.
              </p>
              <p>
                My expertise spans across various databases including MongoDB, Cassandra, ElasticSearch, 
                MySQL, PostgreSQL, and Oracle SQL. I'm passionate about building scalable, high-performance 
                solutions and driving innovation through collaboration and mentorship.
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
                <div className="info-item">
                  <strong>Website:</strong>
                  <span>jeffrinmb.netlify.app</span>
                </div>
              </div>
            </div>
            <div className="skills-container">
              <h3>Technical Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
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
            <h3>Education</h3>
            <div className="education-card">
              <h4>Bachelor of Technology</h4>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="section portfolio-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-card-header">
                  <h3>{project.title}</h3>
                  <span className="project-company">{project.company}</span>
                </div>
                <span className="project-period">{project.period}</span>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section achievements-section">
        <div className="container">
          <h2 className="section-title">Achievements & Awards</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <h3>{achievement.title}</h3>
                <p className="achievement-org">{achievement.org}</p>
                <p className="achievement-desc">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
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
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Jeffrin Mathew Benny. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/jeffrin-mathew-benny" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/jeffrinmb" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/jeffrin_mb" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
