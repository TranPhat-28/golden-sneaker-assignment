import Card from "./components/Card/Card";
import Wave from "react-wavify";

function App() {
  return (
    <div className="main-container">

      <Card cardTitle="Our Products" />
      <Card cardTitle="Your cart" />

      {/* Wave component */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: -1, width: '100vw' }}>
        <Wave
          fill='#F6C90E'
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 3
          }}
        />
      </div>

    </div>
  );
}

export default App;
