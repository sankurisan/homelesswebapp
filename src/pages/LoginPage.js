import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Ensure this path is correct

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic
    navigate('/login'); // Redirect to the login page
  };

  const handleNewUser = () => {
    navigate('/register'); // Redirect to the registration page
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Redirect to the forgot password page
  };

  return (
    <div className="login-page">
      <form className="login-form">
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="sign-in-button" onClick={handleLogin}>Sign In</button>
        <button className="new-user-button" onClick={handleNewUser}>New User</button>
        <button className="forgot-password-link" onClick={handleForgotPassword}>
          Forgot Password?
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
