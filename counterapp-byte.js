import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

// // let element = React.createElement("h1", null, "React element");
// // const counterDisplayElement = React.createElement("h1",{className:"counter-display"},0);
// const counterDisplayElementJSX = <h1 className="counter-display">{2*5}</h1>
// // const incrementButtonElement = React.createElement("button","null","+");
// const incrementButtonElement = <button>+</button>
// const decrementButtonElement = <button>+</button>
// // const decrementButtonElement = React.createElement("button","null","-");
// // const containerDivElement = React.createElement("div","null",[counterDisplayElementJSX,incrementButtonElement,decrementButtonElement]);
// //const containerDivElementjsx = (<div>{[counterDisplayElementJSX,incrementButtonElement,decrementButtonElement]}</div>)
// const containerDivElementJSX = (
//     <div>
//       <h1 className="counter-display">0</h1>
//       <button>+</button>
//       <button>-</button>
//     </div>
//   )
// ReactDOM.render(containerDivElementJSX, document.querySelector("#root"));

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increaseCount = () => {
    this.setState((state, props) => {
      return { count: state.count + props.diff };
    });
  };
  decreaseCount = () => {
    this.setState((state, props) => {
      return { count: state.count - props.diff };
    });
  };
  render() {
    return (
      <div>
        <h1 className="counter-display">{this.state.count}</h1>
        <button onClick={this.increaseCount}>+{this.props.diff}</button>
        <button onClick={this.decreaseCount}>-{this.props.diff}</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter diff={1} />
        <Counter diff={10} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
