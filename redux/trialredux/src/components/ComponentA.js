import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFruitName } from '../features/fruits/fruitSlice';

function ComponentA() {
  const fruit = useSelector((state) => state.fruitReducer.fruit);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Component A</h1>
      {fruit}
      <input
        onChange={(e) => {
          dispatch(changeFruitName(e.target.value));
        }}
      ></input>
    </div>
  );
}

export default ComponentA;
//comment out-github
