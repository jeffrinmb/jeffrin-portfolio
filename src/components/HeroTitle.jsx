import React from 'react';
import './HeroTitle.css';

const HeroTitle = ({ children, className = '' }) => {
  return (
    <h1 className={`hero-title ${className}`.trim()}>
      {children}
    </h1>
  );
};

export default HeroTitle;
