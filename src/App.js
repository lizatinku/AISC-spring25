import logo from './logo.svg';
import './App.css';
import React from 'react';
import './SplitScreen.css';

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="split-screen">
      <div className="pane" style={{ flex: leftWeight, marginLeft: '20px'}}>{left}</div>
      <div className="pane" style={{ flex: rightWeight }}>{right}</div>
    </div>
  ); 
};

const SplitScreenExample = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <div>
        <h1>Result Predictor</h1>
        <p>Based on the Qualifying Position</p>
      </div>
      <div>
        <h1>Predicting Formula 1 Race Results</h1>
        <p>A Machine Learning approach to predict race results and detailed circuit analysis</p>
      </div>
    </SplitScreen>
  );
};

export default SplitScreenExample;

