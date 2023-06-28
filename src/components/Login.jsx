import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // Perform login logic here, e.g., send data to the server
    console.log(formData);

    // Clear the form after submission
    setFormData({
      email: '',
      password: '',
    });

    // Redirect to the discussion page
    history.push('/DiscussionForum');
  };

   const handleFormSwitch = () => {
    // Redirect to the register page
    history.push('/register');
  };

  return (
    <div className="LoginForm">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
          <button type="submit">Login</button>
          <p className="exchangebutton">
            Don't have an account?{' '}
            <button type="button" onClick={handleFormSwitch}>
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

 
