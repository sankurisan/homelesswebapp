import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.css'; // Import CSS file

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleSendOTP = () => {
    // Implement OTP sending logic here
    navigate('/login'); // Redirect back to login page or another appropriate page
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h1>Forgot Password</h1>
        <input type="email" placeholder="Enter your email" />
        <button onClick={handleSendOTP}>Send OTP</button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
