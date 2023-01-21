import React from "react";
import { useCounter } from "./CountContext";
import Counter from "./Counter";
import SaveCount from "./SaveCount";

const Main = () => {
  /**
   * This Main component also does not use any state
   * But again passes it forward for Counter & SaveCount component
   */
  const { counters, setCounters } = useCounter();

  return (
    <div className="main">
      {counters.map((item) => (
        <Counter
          key={item.id}
          counters={counters}
          setCounters={setCounters}
          id={item.id}
        />
      ))}
      <SaveCount />
    </div>
  );
};

// ~~ With Context ~~

// import React, { useContext } from "react";
// import Counter from "./Counter";
// import { CountContext } from "./Dashboard";
// import SaveCount from "./SaveCount";

// const Main = () => {
//   const { counters, setCounters } = useContext(CountContext);

//   return (
//     <div className="main">
//       {counters.map((item) => (
//         <Counter
//           key={item.id}
//           counters={counters}
//           setCounters={setCounters}
//           id={item.id}
//         />
//       ))}
//       <SaveCount />
//     </div>
//   );
// };

// ~~ With Context & Custom Provider ~~

// import React from "react";
// import Counter from "./Counter";
// import { useCounter } from "./CountProvider";
// import SaveCount from "./SaveCount";

// const Main = () => {
//   const { counters, setCounters } = useCounter();

//   return (
//     <div className="main">
//       {counters.map((item) => (
//         <Counter
//           key={item.id}
//           counters={counters}
//           setCounters={setCounters}
//           id={item.id}
//         />
//       ))}
//       <SaveCount />
//     </div>
//   );
// };

export default Main;
