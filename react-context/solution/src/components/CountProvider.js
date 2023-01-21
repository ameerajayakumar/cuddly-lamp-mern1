import React, { useContext, useState } from "react";

const CountContext = React.createContext();

export const CountProvider = ({ children, initState }) => {
  const [counters, setCounters] = useState(initState);
  const [countHistory, setCountHistory] = useState([]);

  return (
    <CountContext.Provider
      value={{ counters, setCounters, countHistory, setCountHistory }}
    >
      {children}
    </CountContext.Provider>
  );
};

export const useCounter = () => {
  const contextValue = useContext(CountContext);
  if (contextValue === undefined) {
    throw new Error("useCounter must be within a CountProvider");
  }

  return contextValue;
};
