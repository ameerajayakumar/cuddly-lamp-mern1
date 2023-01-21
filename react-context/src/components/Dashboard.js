// import React, { useState } from "react";
// import Main from "./Main";
// import Sidebar from "./Sidebar";
// import { totalCount } from "../App";

// export const initCounterState = [
//   { id: "one", diff: 2, value: 0 },
//   { id: "two", diff: 3, value: 0 }
// ];

// const Dashboard = () => {
//   //Here we are maintaining the two states
//   const [counters, setCounters] = useState(initCounterState);
//   const [countHistory, setCountHistory] = useState([]);

//   //These states will be passed to the child components
//   return (
//     <div className="dashboard">
//       <Sidebar totalCount={totalCount(counters)} countHistory={countHistory} />
//       <Main
//         counters={counters}
//         setCounters={setCounters}
//         countHistory={countHistory}
//         setCountHistory={setCountHistory}
//       />
//     </div>
//   );
// };

// ~~~ With Context ~~~
import React, { createContext, useState } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import { totalCount } from '../App';

export const CountContext = createContext();

export const initCounterState = [
  { id: 'one', diff: 2, value: 0 },
  { id: 'two', diff: 3, value: 0 },
];

const Dashboard = () => {
  //Here we are maintaining the three states
  const [counters, setCounters] = useState(initCounterState);
  const [countHistory, setCountHistory] = useState([]);

  return (
    <CountContext.Provider
      value={{
        counters,
        setCounters,
        countHistory,
        setCountHistory,
      }}
    >
      <div className="dashboard">
        <Sidebar totalCount={totalCount(counters)} />
        <Main />
      </div>
    </CountContext.Provider>
  );
};

// ~~ With Context & Custom Providers ~~
// import React from "react";
// import { CountProvider } from "./CountProvider";
// import Main from "./Main";
// import Sidebar from "./Sidebar";

// export const initCounterState = [
//   { id: "one", diff: 2, value: 0 },
//   { id: "two", diff: 3, value: 0 }
// ];

// const Dashboard = () => {
//   return (
//     <CountProvider initState={initCounterState}>
//       <div className="dashboard">
//         <Sidebar />
//         <Main />
//       </div>
//     </CountProvider>
//   );
// };

export default Dashboard;
