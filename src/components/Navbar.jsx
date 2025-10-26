import React from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, scrollToSection, darkMode, setDarkMode, menuOpen, setMenuOpen }) => {
  return (
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
  );
};

export default Navbar;
