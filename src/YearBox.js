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