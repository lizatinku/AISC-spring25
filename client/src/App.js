import './App.css';
import React from 'react';
import LeftPanel from './Leftpanel';
import RightPanel from './Rightpanel';
import Leaderboard from './leaderboard';
import { useState } from "react";


const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="split-screen">
      <div className="pane" style={{ flex: leftWeight }}>{left}</div>
      <div className="pane" style={{ flex: rightWeight }}>{right}</div>
    </div>
  );
};

function App() {
  const [rightPanelView, setRightPanelView] = useState("default");

  return (
    <SplitScreen leftWeight={0.6} rightWeight={1}>
      <LeftPanel setRightPanelView={setRightPanelView} />
      <div className="right-panel">
        {rightPanelView === "leaderboard" ? <Leaderboard /> : <RightPanel />}
      </div>
    </SplitScreen>
  );
}

export default App;
