import logo from './logo.svg';
import './App.css';
import React from 'react';
import './SplitScreen.css';

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="split-screen">
      <div className="pane" style={{ flex: leftWeight }}>{left}</div>
      <div className="pane" style={{ flex: rightWeight }}>{right}</div>
    </div>
  );
};

const SplitScreenExample = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <div>
        <h1>Left Pane</h1>
        <p>Content for the left side.</p>
      </div>
      <div>
        <h1>Right Pane</h1>
        <p>Content for the right side.</p>
      </div>
    </SplitScreen>
  );
};
export default SplitScreenExample;

