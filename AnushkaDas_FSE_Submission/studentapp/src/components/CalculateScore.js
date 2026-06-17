import React from 'react';

function CalculateScore({ name, school, total, goal }) {
  const average = (total + goal) / 2;
  // Dynamic color logic based on average
  const scoreStyle = { color: average > 70 ? 'green' : 'red' };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>Student: {name}</h2>
      <p>School: {school}</p>
      <p style={scoreStyle}>Average Score: {average}</p>
    </div>
  );
}
export default CalculateScore;