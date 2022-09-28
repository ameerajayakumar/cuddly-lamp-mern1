import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 100,
    };
  }
  onButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  onDecreButtonClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Counter App</h1>
          <h2>{this.state.count}</h2>
          <button onClick={this.onButtonClick}>+1</button>
          <span> </span>
          <button onClick={this.onDecreButtonClick}>-1</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
