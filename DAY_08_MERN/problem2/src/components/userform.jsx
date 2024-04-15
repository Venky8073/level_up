import React, { useState, useRef } from 'react';

export const UserForm = () => {
  // Controlled input state
  const [name, setName] = useState('');
  // Ref for uncontrolled input
  const emailRef = useRef(null);
  // State for validation message
  const [validationMessage, setValidationMessage] = useState('');

  // Handler for controlled input change
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setValidationMessage('Name must be at least 3 characters long.');
    } else {
      setValidationMessage('');
    }
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Accessing value of uncontrolled input using ref
    const email = emailRef.current.value;
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        {validationMessage && <p style={{ color: 'red' }}>{validationMessage}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          ref={emailRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
