import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';

const developers = [
  'Desiree Poon',
  'Jayanth Pasupulati',
  'Liza Tinku Jose',
  'Pranaya Rao Ganta',
  'Rei Hernandez',
];

const quotes = [
  `"When you no longer go for a gap, you're no longer a racing driver." – Ayrton Senna`,
  `"To achieve anything in this game, you must be prepared to dabble in the boundary of disaster." – Stirling Moss`,
  `"The car is such a big part of the performance." – Lewis Hamilton`,
];

const QuoteGrid = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
    marginTop: '2rem',
    marginBottom: '3rem'
  }}>
    {quotes.map((quote, idx) => (
      <div key={idx} style={{
        backgroundColor: '#FFE1E1',
        padding: '1rem',
        borderRadius: '1rem',
        fontStyle: 'italic',
        fontSize: '0.9rem',
        textAlign: 'center',
        border: '1px solid #fca5a5'
      }}>
        {quote}
      </div>
    ))}
  </div>
);

const ImageGrid = () => {
  const images = [pic1, pic2, pic3];
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1rem',
      marginTop: '2rem',
      marginBottom: '3rem'
    }}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`F1 Pic ${idx + 1}`}
          style={{
            width: '100%',
            height: '160px',
            objectFit: 'cover',
            borderRadius: '1rem',
            border: '1px solid #ccc'
          }}
        />
      ))}
    </div>
  );
};

const Box = () => (
  <div
    style={{
      padding: '15px',
      border: '5px solid #ccc',
      borderColor: '#B6B5B5',
      height: '600px',
      width: '600px',
      marginLeft: 175,
      backgroundColor: '#B6B5B5',
    }}
  >
    {/* Replace with actual leaderboard content */}
  </div>
);

export default function RightPanel({ showLeaderboard }) {
  return (
    <div className="right-panel">
      <div className="content">
        <header style={{ textAlign: 'center' }}>
          <h1 className="title">F1 Race Predictor</h1>
          <p className="subtitle">
            A Machine Learning approach to predict race results and detailed circuit analysis.
          </p>
        </header>

        {showLeaderboard ? (
          <>
            <h3 className="section-header">Results Are In...</h3>
            <p className="leaderboard">Leaderboard</p>
            <Box />
          </>
        ) : (
          <>
            <ImageGrid />
            <QuoteGrid />
          </>
        )}
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
