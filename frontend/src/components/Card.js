import React from 'react';

const Card = ({ title, children, className }) => {
  return (
    <div className={`bg-gray-800 p-8 rounded-3xl shadow-md transform transition duration-300 hover:scale-105 ${className}`}>
      <h2 className="text-3xl font-semibold mb-4 text-light-burnt-orange">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
