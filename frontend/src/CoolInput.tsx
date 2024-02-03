import React from 'react';
import './CoolInput.css'; // Importing our custom CSS

const CoolInput = ({ type = 'text', placeholder = '', onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="cool-input"
    />
  );
};

export default CoolInput;
