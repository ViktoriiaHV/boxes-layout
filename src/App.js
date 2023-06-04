import './App.css';
import { useState } from 'react';

const backgroundColors = [
  'primary',
  'pink',
  'blue',
  'green',
  'turquoise',
  'purple',
  'orange',
  'brown',
  'yellow',
  'sand',
  'mint'
];

function App() {
  const [boxState, setBoxState] = useState({ rows: '', columns: '' });

  const handleInputChange = (e) => {
    const maxValue = 10;
    const value = e.target.value;
    const type = e.target.name;
    if (value >= 0 && value <= maxValue) {
      setBoxState((prevState) => ({ ...prevState, [type]: +value || '' }));
    }
  };

  return (
    <div className="section">
      <div className="input__container">
        <input
          placeholder="rows"
          name="rows"
          type="number"
          value={boxState.rows}
          onChange={handleInputChange}
        />
        <input
          placeholder="columns"
          name="columns"
          type="number"
          value={boxState.columns}
          onChange={handleInputChange}
        />
      </div>
      <BoxContainer boxSize={boxState} />
    </div>
  );
}

const BoxContainer = ({ boxSize }) => {
  const { rows, columns } = boxSize;
  const rowInputs = new Array(rows).fill(null);
  const columnInputs = new Array(columns).fill(null);

  return (
    <div className="box__container">
      {rowInputs.map((_, rowIdx) => {
        return (
          <div key={rowIdx} className="box__row">
            {columnInputs.map((_, idx) => (
              <div 
              key={idx} 
              className={`box__row-item ${backgroundColors[Math.floor(Math.random() * backgroundColors.length) ]}`}>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default App;
