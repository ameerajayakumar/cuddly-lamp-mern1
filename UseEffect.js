import React, { useState, useEffect } from 'react';

export default function App() {
  const [input, updateInput] = useState('');
  const [userId, updateInput2] = useState(1);
  const [emailId, updateEmailId] = useState('');

  const fetchEmailAndSave = () => {
    const url = `https://reqres.in/api/users/${userId}`;

    fetch(url)
      .then((r) => r.json())
      .then((r) => updateEmailId(r.data.email));
  };

  useEffect(() => {
    fetchEmailAndSave();
  }, []);

  useEffect(() => {
    fetchEmailAndSave();
  }, [userId]);

  return (
    <div>
      <h1>hello</h1>
      <input value={input} onChange={(e) => updateInput(e.target.value)} />
      <input type="number" value={userId} onChange={(e) => updateInput2(e.target.value)} />
      <h3>{emailId}</h3>
    </div>
  );
}

/**
 *
 * {
 *    type: 'html',
 *     children: [{ body,  children: [
 *
 *
 * ]} { head }]
 *
 * }
 *
 */
