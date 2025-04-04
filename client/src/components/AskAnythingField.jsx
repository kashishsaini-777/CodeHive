import React, { useState } from 'react';
import './AskAnythingField.css';

const AskAnythingField = ({ onClick }) => {
  const [question, setQuestion] = useState('');

  return (
    <div className="ask-container" onClick={onClick}>
      <input 
        type="text" 
        placeholder="Ask anything..." 
        className="ask-input"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
    </div>
  );
};

export default AskAnythingField;
