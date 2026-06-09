import React from 'react';
import './SizeGuide.css';

function SizeGuide({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className='sizeguide-overlay' onClick={onClose}>
      <div className='sizeguide-modal' onClick={(e) => e.stopPropagation()}>
        <button className='sizeguide-close' onClick={onClose}>
          ✕
        </button>
        <h2>SIZE GUIDE</h2>

        <div className='sizeguide-table'>
          <table>
            <thead>
              <tr>
                <th>SIZE</th>
                <th>CHEST (cm)</th>
                <th>WAIST (cm)</th>
                <th>HIPS (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XS</td>
                <td>86-91</td>
                <td>71-76</td>
                <td>86-91</td>
              </tr>
              <tr>
                <td>S</td>
                <td>91-96</td>
                <td>76-81</td>
                <td>91-96</td>
              </tr>
              <tr>
                <td>M</td>
                <td>96-101</td>
                <td>81-86</td>
                <td>96-101</td>
              </tr>
              <tr>
                <td>L</td>
                <td>101-106</td>
                <td>86-91</td>
                <td>101-106</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>106-111</td>
                <td>91-96</td>
                <td>106-111</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className='sizeguide-note'>
          Measurements are body measurements, not garment measurements.
        </p>
      </div>
    </div>
  );
}

export default SizeGuide;
