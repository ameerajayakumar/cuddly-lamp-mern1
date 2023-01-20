import React from "react";

const Counter = ({ counters = [], setCounters, id }) => {
  const currentCounter = counters.find((c) => c.id === id);

  const increaseCount = () => {
    const updatedCounter = {
      ...currentCounter,
      value: currentCounter.value + currentCounter.diff
    };
    const nextCounters = counters.map((counter) =>
      counter.id === id ? updatedCounter : counter
    );
    setCounters(nextCounters);
  };

  const decreaseCount = () => {
    const updatedCounter = {
      ...currentCounter,
      value: currentCounter.value - currentCounter.diff
    };
    const nextCounters = counters.map((counter) =>
      counter.id === id ? updatedCounter : counter
    );
    setCounters(nextCounters);
  };

  const resetCounter = () => {
    const updatedCounter = { ...currentCounter, value: 0 };
    const nextCounters = counters.map((counter) =>
      counter.id === id ? updatedCounter : counter
    );
    setCounters(nextCounters);
  };

  /**
   * This Counter Component "consumes" the count state
   * "provided" by the Dashboard Component
   */
  return (
    <div>
      <h1 className="counter-display">{currentCounter.value}</h1>
      <div>
        <button onClick={increaseCount}> +{currentCounter.diff} </button>
        <button onClick={decreaseCount}> -{currentCounter.diff} </button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
