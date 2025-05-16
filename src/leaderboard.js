//import racecar from './assets/racecar1.png';
import racecar from './assets/car.png';

const developers = [
  'Desiree Poon',
  'Jayanth Pasupulati',
  'Liza Tinku Jose',
  'Pranaya Rao Gupta',
  'Rei Hernandez',
];

const Box =({}) => {
  return (
    <div
      style ={{padding: '15px',
        border: '5px solid #ccc',
        borderColor: '#B6B5B5',
        height: '600px', width: '600px',
        marginLeft: 175,
        backgroundColor: '#B6B5B5'
      }}>
    </div>
  )
}

export default function Leaderboard() {
  return (
    <div className="right-panel">
      <div className="content">
        <header style={{ textAlign: 'center'}}>
        <h1 className="title">F1 Race Predictor</h1>
        </header>

        <p className="leaderboard">
          Leaderboard
        </p>

        <Box style={{width: 100, height: 100, backgroundColor: 'white'}}>
        </Box>

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
