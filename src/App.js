import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

// 1. Create a button
// 2. Generate a random color - onClick
// 3. Color a div in that random color and show the hex color in the center of the div

export default function App() {
  const [color, setColor] = useState(randomColor.randomColor());
  // const [emojiName, setEmojiName] = useState('');
  const backgroundColor = color;

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: backgroundColor,
          width: 'auto',
          height: '150px',
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
