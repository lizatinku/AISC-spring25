
import React from 'react';
import './SplitScreen.css';

const SplitScreen = ({ children }) => {
  return <div className="split-screen">{children}</div>;
};

const Pane = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const SplitScreenExample = () => {
  return (
    <SplitScreen>
      <Pane className="left-pane">
        <h1>Left Pane</h1>
        <p>Content for the left side.</p>
      </Pane>
      <Pane className="right-pane">
        <h1>Right Pane</h1>
        <p>Content for the right side.</p>
      </ </Pane>
    </SplitScreen>
  );
};

export default SplitScreenExample;