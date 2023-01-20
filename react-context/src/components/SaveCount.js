import React from "react";

const SaveCount = ({ totalCount = 0, countHistory = [], setCountHistory }) => {
  const saveHistory = () => {
    /**
     * This SaveCount Component "consumes" the countHistory array
     * "provided" by the Dashboard Component
     */
    setCountHistory([
      {
        value: totalCount,
        time: new Date().toLocaleTimeString()
      },
      ...countHistory
    ]);
  };

  return (
    <button id="save-btn" onClick={saveHistory}>
      Save Total Count
    </button>
  );
};

// ~~ With Context ~~

// import React, { useContext } from "react";
// import { totalCount } from "../App";
// import { CountContext } from "./Dashboard";

// const SaveCount = () => {
//   const { counters, countHistory, setCountHistory } = useContext(CountContext);

//   const saveHistory = () => {
//     setCountHistory([
//       {
//         value: totalCount(counters),
//         time: new Date().toLocaleTimeString()
//       },
//       ...countHistory
//     ]);
//   };

//   return (
//     <button id="save-btn" onClick={saveHistory}>
//       Save Total Count
//     </button>
//   );
// };

// ~~ With Context & Custom Provider~~

// import React from "react";
// import { totalCount } from "../App";
// import { useCounter } from "./CountProvider";

// const SaveCount = () => {
//   const { counters, countHistory, setCountHistory } = useCounter();

//   const saveHistory = () => {
//     setCountHistory([
//       {
//         value: totalCount(counters),
//         time: new Date().toLocaleTimeString()
//       },
//       ...countHistory
//     ]);
//   };

//   return (
//     <button id="save-btn" onClick={saveHistory}>
//       Save Total Count
//     </button>
//   );
// };

export default SaveCount;
