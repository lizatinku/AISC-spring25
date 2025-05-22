import React, { useState, useRef, useEffect } from 'react';
import logo from './assets/fonelogo.png';
import './Leftpanel.css';

function LeftPanel({ setRightPanelView, setLeaderboardData }) {
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [selectedCircuit, setSelectedCircuit] = useState("");
  const [selectedTyre, setSelectedTyre] = useState("");

  const handlePredict = async () => {
    if (!selectedCircuit) {
      alert("Please select a circuit.");
      return;
    }

    try {
      const response = await fetch(`/data/${selectedCircuit.toLowerCase()}.json`);
      const data = await response.json();
      console.log("Loaded local JSON:", data);

      setLeaderboardData(data.leaderboard);
      setRightPanelView("leaderboard");
    } catch (error) {
      console.error("Failed to load local JSON:", error);
      alert("Error loading leaderboard data.");
    }
  };

  return (
    <div className="left-panel-container">
      <img src={logo} alt="Racecar" className="racecar-img" />
      <header className="header-text">
        <h1>F1 leaderboard predictor</h1>
        <p>Where your starting grid meets machine learning magic.</p>
      </header>

      <div className="form-box">
        <div className="form-group">
          <label>Year:</label>
          <select className="input-field" defaultValue="2025">
            <option value="2025">2025</option>
          </select>
        </div>

        <div className="form-group">
          <label>Circuit:</label>
          <select
            className="input-field"
            value={selectedCircuit}
            onChange={(e) => setSelectedCircuit(e.target.value)}
          >
            <option value="">Select an option</option>
            <option>Australia</option>
            <option>Japan</option>
            <option>Bahrain</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tyre Compound:</label>
          <select
            className="input-field"
            value={selectedTyre}
            onChange={(e) => setSelectedTyre(e.target.value)}
          >
            <option value="">Select an option</option>
            <option>Soft</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <WeatherDropdown
          options={['Yes', 'No']}
          selected={selectedWeather}
          onSelect={setSelectedWeather}
        />

        <div className="predict-button-wrapper">
          <button onClick={handlePredict} className="predict-button">
            Predict...
          </button>
        </div>
      </div>
    </div>
  );
}

function WeatherDropdown({ options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <label>Include Weather Data:</label>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selected || "Select an option"} {selected && <span>✅</span>}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              className="dropdown-item"
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LeftPanel;
