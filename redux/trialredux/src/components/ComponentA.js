import React, { useState } from 'react';

function ComponentA() {
  const [fruit, setFruit] = useState('Mango');
  return (
    <div>
      <h1>Component A</h1>
      {fruit}
      <input onChange={(e) => setFruit(e.target.value)}></input>
    </div>
  );
}

export default ComponentA;
