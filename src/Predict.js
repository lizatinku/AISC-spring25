function Predict({ setRightPanelView }) {
  return (
    <button
      onClick={() => setRightPanelView("leaderboard")}
      style={{ marginLeft: 125, marginTop: 45, width: 385, height: 75 }}
    >
      Predict...
    </button>
  );
}

export default Predict;
