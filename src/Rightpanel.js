import racecar from './assets/racecar1.png';

const developers = [
  'Desiree Poon',
  'Jayanth Pasupulati',
  'Liza Tinku Jose',
  'Pranaya Rao Gupta',
  'Rei Hernandez',
];

export default function RightPanel() {
  return (
    <div className="right-panel">
      <div className="content">
        <h1 className="title">F1 Race Predictor</h1>
        <p className="subtitle">
          A Machine Learning approach to predict race results and detailed circuit analysis.
        </p>

        <h2 className="section-header">About F1</h2>
        <p className="paragraph">
          Formula 1, the world’s top motorsport since 1950, features 20 drivers from 10 elite teams racing on legendary tracks like Monaco and Suzuka.
          Spanning five continents, it’s a high-stakes blend of speed, strategy, and split-second decisions.
        </p>

        <img src={racecar} alt="Racecar" className="racecar-img" />
      </div>

      <div className="dev-section">
        <h2 className="section-header">Developed By:</h2>
        <div className="dev-grid">
          {developers.map((dev, idx) => (
            <div key={idx} className="dev-box">
              {dev}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
