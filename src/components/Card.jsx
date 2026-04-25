import React from 'react';
import './Card.css';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ title, action }) => (
  <div className="card-header">
    <h3 className="card-title">{title}</h3>
    {action && <div className="card-action">{action}</div>}
  </div>
);

export const CardBody = ({ children }) => (
  <div className="card-body">
    {children}
  </div>
);
