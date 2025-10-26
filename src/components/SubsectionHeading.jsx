import React from 'react';
import './SubsectionHeading.css';

const SubsectionHeading = ({ children, className = '', variant = 'default' }) => {
  return (
    <h3 className={`subsection-heading subsection-heading--${variant} ${className}`.trim()}>
      {children}
    </h3>
  );
};

export default SubsectionHeading;
