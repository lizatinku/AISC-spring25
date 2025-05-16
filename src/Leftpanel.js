import React from 'react';
import logo from './assets/fonelogo.png'; 
import RoundedBox from './RoundedBox';
import InputBox from './YearBox';
import Circuit from './CircuitDropdown';
import TyreCompound from './TyreCompoundDropdown';
import WeatherData from './IncludeWeatherDataDropdown';
import Predict from './Predict';

const Box = ({}) => {
  return (
    <div
      style={{
        padding: '15px',
        backgroundColor: '#510A17',
        height: '100px', width: '610px',
        marginTop: -705
       }}>
    </div>
  );
};

const LeftPanel = () => {
  return (
    <div style={{ height: 931 ,backgroundColor: '#5C101E'}} >
      <img src={logo} alt="Racecar" className="racecar-img" style={{height:75, width:115, marginLeft: 10}} />
      <header style={{ textAlign: 'center', color: 'white'}}>
        <h1>Result Predictor</h1>
        <p>Based on the qualifying Position</p>
      </header>

      <RoundedBox style={{ backgroundColor: '#8C1C26'}}>
      </RoundedBox>
      <Box style= {{ backgroundColor: '#510A17'}}>
      </Box>

      {/* input and dropdown menus in the box */}
      <InputBox style={{backgroundColor: '#0000000'}}> </InputBox>
      <Circuit style={{backgroundColor: '#000000'}}> </Circuit>
      <TyreCompound style={{backgroundColor: '#000000'}}> </TyreCompound>
      <WeatherData style={{backgroundColor: '#000000'}}> </WeatherData>
      <Predict style={{backgroundColor: 'white'}}> </Predict>
    </div>
  );
};


export default LeftPanel;
