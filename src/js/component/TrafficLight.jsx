import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const [colors, setColors] = useState(['red', 'yellow', 'green']);

  const cycleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes('purple')) {
      setColors([...colors, 'purple']);
    }
  };

  return (
    <div>
      <div className="traffic-light">
        {colors.map((lightColor) => (
          <div
            key={lightColor}
            className={`light ${lightColor} ${color === lightColor ? 'glow' : ''}`}
            onClick={() => setColor(lightColor)}
          ></div>
        ))}
      </div>
      <button onClick={cycleColor}><strong>Cycle Color</strong></button>
      <button onClick={addPurple}><strong>Add Purple</strong></button>
      <style>
     
     
      </style>
    </div>
  );
};

export default TrafficLight;