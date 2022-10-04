import { useState } from 'react';
import '/src/styles.css';

const CounterHooks = (props) => {
  const [counter, setCounter] = useState(0);
  const [some, setSome] = useState('Hello');

  const increaseCount = () => {
    setCounter(counter + props.diff);
  };

  const decreaseCount = () => {
    setCounter(counter - props.diff);
  };

  return (
    <div>
      <h1> {counter} </h1>
      <h1> {some} </h1>

      <button onClick={increaseCount}> +{props.diff} </button>
      <button onClick={decreaseCount}> -{props.diff} </button>
    </div>
  );
};

export default CounterHooks;
