import React from 'react';
import logo from './assets/fonelogo.png';
import RoundedBox from './RoundedBox';

const LeftPanel = () => {
  return (
    <div style={{ height: 897 ,backgroundColor: 'maroon'}} >
      <img src={logo} alt="Racecar" className="racecar-img" style={{height:75, width:115}} />
      <header style={{ textAlign: 'center', color: 'white'}}>
        <h1>Result Predictor</h1>
        <p>Based on the qualifying Position</p>
      </header>

      <RoundedBox style={{ backgroundColor: '#f0f0f0' }}>
      </RoundedBox>
      {/* Your form components will go here later */}
    </div>
  );
};


export default LeftPanel;
