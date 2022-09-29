import React from 'react';
import CDMActivity from './CDMActivity';
/**
 *
 * Mounting phase
 * 1. contructor
 * 2. render
 * 3. componentDidMount  -> 1
 *
 * Updating - ( state or props changing)
 * 1. render
 * 2. componentDidUpdate --> 0 , .... infite times
 *
 */

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }

  componentDidMount() {
    console.log('CDM parent');
    // api calls
  }

  componentDidUpdate(prevProps, prevState) {}

  onOnTextChange = (event) => {
    const text = event.target.value;
    this.setState({
      number: text,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log('-- FORM subitted');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Name:
            <input value={this.state.number} onChange={this.onOnTextChange} type="number" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <CDMActivity userId={this.state.number} />
      </div>
    );
  }
}

// uncoontrolled --> a componenr which is NOT controlld by react
