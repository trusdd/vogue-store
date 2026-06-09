import React, { useState, useEffect } from 'react';

function PriceFilter({ min, max, onMinChange, onMaxChange }) {
  const [localMin, setLocalMin] = useState(min);
  const [localMax, setLocalMax] = useState(max);

  useEffect(() => {
    setLocalMin(min);
    setLocalMax(max);
  }, [min, max]);

  const handleMinChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setLocalMin(val);
    onMinChange(val);
  };

  const handleMaxChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setLocalMax(val);
    onMaxChange(val);
  };

  return (
    <div className='price-filter-container'>
      <div className='price-filter-label'>
        <span>PRICE RANGE</span>
        <span className='price-values'>
          ₽{localMin.toLocaleString()} — ₽{localMax.toLocaleString()}
        </span>
      </div>
      <div className='price-sliders'>
        <div className='price-slider'></div>
        <div
          className='price-slider-fill'
          style={{
            left: `${(localMin / 60000) * 100}%`,
            right: `${100 - (localMax / 60000) * 100}%`,
          }}></div>
        <input
          type='range'
          min='0'
          max='60000'
          step='100'
          value={localMin}
          onChange={handleMinChange}
          className='price-slider-input'
          style={{ zIndex: 2 }}
        />
        <input
          type='range'
          min='0'
          max='60000'
          step='100'
          value={localMax}
          onChange={handleMaxChange}
          className='price-slider-input'
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  );
}

export default PriceFilter;
