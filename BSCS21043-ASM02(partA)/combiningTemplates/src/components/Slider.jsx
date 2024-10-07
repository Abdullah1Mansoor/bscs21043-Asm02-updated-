import { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default Slider;
