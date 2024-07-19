import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import './App.css'; // Import the App.css

function App() {
  return (
    <Router>
      <div className="full-page">
        <header className="header">
          <Link to="/">
            <button className="header-home-button">Home</button>
          </Link>
          <div className="header-right-buttons">
            <Link to="/register">
              <button className="header-button">Register</button>
            </Link>
            <Link to="/login">
              <button className="header-button">Login</button>
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={
            <div>
              <div className="banner">
                <p className="banner-text">They Need Our Help!</p>
              </div>
              <div className="content-container">
                <div className="content">
                  <p>
                    Homelessness is a complex issue with multifaceted causes and consequences. Individuals experiencing homelessness often lack stable housing,
                    adequate food, healthcare, and basic necessities. They may also face mental health challenges, substance abuse, and limited access to
                    employment opportunities. To address homelessness effectively, a multi-pronged approach is crucial. This includes providing emergency
                    shelter, affordable housing, access to healthcare and mental health services, job training programs, and supportive services to help individuals
                    regain stability. Additionally, preventing homelessness through affordable housing initiatives, rental assistance, and addressing poverty are
                    essential steps towards creating a more inclusive and compassionate society.
                  </p>
                </div>
              </div>
            </div>
          } />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
        <footer className="footer">
          <p className="footer-text">
            Contact: +1 2045763654 | Email Us: CustomerCare@homelessneeds.com
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
