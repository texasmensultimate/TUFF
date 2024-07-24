// src/components/Card.js
import React from 'react';

const Card = ({ title, children, className }) => {
    return (
      <div className={`bg-dark-card p-6 rounded-2xl shadow-md flex flex-col h-full ${className}`}>
        <h2 className="text-2xl font-semibold mb-4 text-burnt-orange">{title}</h2>
        <div className="flex-grow">{children}</div>
      </div>
    );
  };

export default Card;
