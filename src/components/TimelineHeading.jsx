import React from 'react';
import './TimelineHeading.css';

const TimelineHeading = ({ children, className = '', variant = 'default' }) => {
  return (
    <h4 className={`timeline-heading timeline-heading--${variant} ${className}`.trim()}>
      {children}
    </h4>
  );
};

export default TimelineHeading;
