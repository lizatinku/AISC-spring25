import logo from './logo.svg';
import './App.css';
import React from 'react';

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="split-screen">
      <div className="pane" style={{ flex: leftWeight}}>{left}</div>
      <div className="pane" style={{ flex: rightWeight }}>{right}</div>
    </div>
  ); 
};

const SplitScreenExample = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={1}>
      <div>
        <header style={{ textAlign: 'center' }}>
          <h1>Result Predictor</h1>
        </header>
        <property style = {{ textAlign: 'center'}}>
          <p>Based on the qualifying Position</p>
        </property>
      </div>
      <div>
        <header style={{ textAlign: 'center' }}>
          <h1>F1 Race Predictor</h1>
        </header>
        <property style = {{ textAlign: 'center'}}>
          <p>A Machine Learning approach to predict race results and</p>
          <p>detailed circuit analysis</p>
        </property>
        <p>About F1</p>
      </div>
    </SplitScreen>
  );
};

export default SplitScreenExample;

