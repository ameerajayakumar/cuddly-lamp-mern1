import React from "react";
import CountHistory from "./History";

const Sidebar = ({ totalCount = 0, countHistory = [] }) => {
  /* This Sidebar component does not use the history state
   * But it passes it on to the CountHistory Component
   * Where this state is "consumed"
   */
  return (
    <div className="sidebar">
      <h2>Total = {totalCount}</h2>
      <CountHistory countHistory={countHistory} />
    </div>
  );
};

// ~~ With Context ~~

// import React from "react";
// import CountHistory from "./History";

// const Sidebar = ({ totalCount = 0 }) => {
//   return (
//     <div className="sidebar">
//       <h2>Total = {totalCount}</h2>
//       <CountHistory />
//     </div>
//   );
// };

// ~~ With Context & Custom Provider~~

// import React from "react";
// import { useCounter } from "./CountProvider";
// import { totalCount } from "../App";
// import CountHistory from "./History";

// const Sidebar = () => {
//   const { counters } = useCounter();
//   return (
//     <div className="sidebar">
//       <h2>Total = {totalCount(counters)}</h2>
//       <CountHistory />
//     </div>
//   );
// };

export default Sidebar;
