import React, { useState } from 'react';

function ComponentB() {
  const [fruit, setFruit] = useState('Orange');
  return (
    <div>
      <h1>Component B</h1>
      {fruit}
      <input onChange={(e) => setFruit(e.target.value)}></input>
    </div>
  );
}

export default ComponentB;
