import React, { useState, useEffect } from 'react';

export default function App() {
  const [input, updateInput] = useState('');
  const [anotherInput, updateInput2] = useState(1);

  // CDM + CDU
  useEffect(() => {
    console.log('came here');
  });

  // CDM
  useEffect(() => {
    console.log('do things in CDM');
  }, []);

  useEffect(() => {
    console.log('do things only for another input');
  }, [anotherInput]);

  return (
    <div>
      <h1>hello</h1>
      <input value={input} onChange={(e) => updateInput(e.target.value)} />
      <input type="number" value={anotherInput} onChange={(e) => updateInput2(e.target.value)} />
    </div>
  );
}
