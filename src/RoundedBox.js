import React from 'react';

const RoundedBox = ({ radius = '10px', ...props }) => {
  return (
    <div
      style={{
        borderRadius: radius,
        padding: '15px',
        border: '1px solid #ccc',
        height: '500px', width: '450px',
        marginLeft: 75
       }}>
    </div>
  );
};

export default RoundedBox;