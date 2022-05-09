import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

// 1. Create a button
// 2. Generate a random color - onClick
// 3. Color a div in that random color and show the hex color in the center of the div

export default function App() {
  const [color, setColor] = useState(randomColor.randomColor());

  return (
    <div className="App">
      <h1>Random Color Generator with React</h1>
      <div
        style={{
          backgroundColor: color,
          width: 'auto',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}
      >
        Generated Color: {color}
      </div>
      <button onClick={() => setColor(randomColor.randomColor())}>
        Generate
      </button>
    </div>
  );
}
