import React, { useState } from 'react';

function InputBox() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style ={{marginLeft: 125, marginTop: 70, color: 'white'}}>
        <p>Year:</p>
        <input style={{width: 375, textAlign: 'center'}}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Input Year..."
        />
    </div>
  );
}

export default InputBox;

import React from 'react';

const RoundedBox = ({ radius = '10px' }) => {
  return (
    <div
      style={{
        borderRadius: radius,
        padding: '15px',
        border: '1px solid #ccc',
        height: '500px', width: '450px',
        marginLeft: 75,
        marginTop: 75,
        backgroundColor: '#8C1C26'
       }}>
    </div>
  );
};

export default RoundedBox;