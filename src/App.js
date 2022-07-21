import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

// 1. Create a button
// 2. Generate a random color - onClick
// 3. Color a div in that random color and show the hex color in the center of the div

export default function App() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [color, setColor] = useState(randomColor());
  const generateColor = randomColor({ hue: hue, luminosity: luminosity });
  return (
    <div className="App">
      <h1
        style={{
          color: color,
          transitionDuration: '0.7s',
        }}
      >
        Random Color Generator with React
      </h1>
      <div
        style={{
          backgroundColor: generateColor,
          transitionDuration: '0.7s',
          width: '900px',
          height: '450px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '24pt',
        }}
      >
        Generated Color: {generateColor}
      </div>
      <br />
      <br />
      <button onClick={() => setColor(generateColor)}>Generate</button>
      <br />
      <br />
      <div>
        <label htmlFor="hue">
          <h3>Choose a hue:</h3>
        </label>
        <input
          id="hue"
          value={hue}
          onChange={(event) => setHue(event.currentTarget.value)}
        />
        <br />
        <br />
        <label htmlFor="luminosity">
          <h3>Choose a luminosity:</h3>
        </label>
        <input
          id="luminosity"
          value={luminosity}
          onChange={(event) => setLuminosity(event.currentTarget.value)}
        />
      </div>
    </div>
  );
}
