import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here, e.g., send data to the server
    console.log(formData);

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    // Redirect to the login page
    history.push('/login');
  };

  const handleFormSwitch = () => {
    // Redirect to the login page
    history.push('/login');
  };

  return (
    <div className="RegistrationForm">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Register</button>
          <p className="exchangebutton">
            Already have an account?{' '}
            <button type="button" onClick={handleFormSwitch}>
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
