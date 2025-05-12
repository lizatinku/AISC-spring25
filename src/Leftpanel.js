import React from 'react';
import logo from './assets/fonelogo.png';

const LeftPanel = () => {
  return (
    <div style={{ padding: '2rem'}} >
      <img src={logo} alt="Racecar" className="racecar-img" style={{height:75, width:115}}/>
      <header style={{ textAlign: 'center', color: 'white'}}>
        <h1>Result Predictor</h1>
        <p>Based on the qualifying Position</p>
      </header>

      {/* Your form components will go here later */}
    </div>
  );
};

export default LeftPanel;
