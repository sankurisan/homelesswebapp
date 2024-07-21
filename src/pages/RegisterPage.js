// src/pages/RegisterPage.js

import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [place, setPlace] = useState('');
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchPlaceFromCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location: ", error);
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  const fetchPlaceFromCoordinates = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=YOUR_API_KEY`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setPlace(data.results[0].formatted);
      } else {
        setPlace('Location not found');
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching place data: ", error);
      setPlace('Error fetching location');
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <h2 className="register-heading">Register/Report A Homeless!</h2>
      <form className="register-form">
        <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
        </div>
        <div className="form-group place-group">
          <label>
            Place:
            <input
              type="text"
              name="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
            />
            <button
              type="button"
              className="location-button"
              onClick={getCurrentLocation}
              disabled={loading}
            >
              {loading ? 'Fetching...' : 'Use Current Location'}
            </button>
          </label>
        </div>
        <div className="form-group">
          <label>
            Approx Age:
            <input type="number" name="age" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Comments:
            <textarea name="comments" required></textarea>
          </label>
        </div>
        <div className="form-group">
          <label>
            Issue:
            <input type="text" name="issue" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Picture:
            <input type="file" name="picture" accept="image/*" required />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
