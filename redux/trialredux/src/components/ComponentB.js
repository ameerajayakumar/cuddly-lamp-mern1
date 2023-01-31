import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFruitName } from '../features/fruits/fruitSlice';

function ComponentB() {
  // const [fruit, setFruit] = useState('Orange');
  const fruit = useSelector((state) => state.fruitReducer.fruit);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Component B</h1>
      {fruit}
      <input
        onChange={(e) => {
          dispatch(changeFruitName(e.target.value));
        }}
      ></input>{' '}
    </div>
  );
}

export default ComponentB;
//comment out temp
