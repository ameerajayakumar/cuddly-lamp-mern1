import React from 'react';
import axios from 'axios';

class Dog extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'random',
      url: '',
    };
  }

  handleChange = (event) => {
    const v = event.target.value;
    this.setState({ value: v });
  };

  componentDidMount() {
    this.fetchCall();
  }

  fetchCall = async () => {
    if (this.state.value === 'random') {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
      const imgURL = response.data.message;
      this.setState((state, props) => {
        return { value: state.value, url: imgURL };
      });
    } else {
      const response = await axios.get(`https://dog.ceo/api/breed/${this.state.value}/images/random`);
      const imgURL = response.data.message;
      this.setState((state, props) => {
        return { value: state.value, url: imgURL };
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.fetchCall();
    }
  }
  render() {
    return (
      <div>
        <label>
          Select a breed:
          <select value={this.state.value} onChange={this.handleChange}>
            <option>random</option>
            <option>beagle</option>
            <option>boxer</option>
            <option>dalmatian</option>
            <option>husky</option>
          </select>
        </label>
        <div>
          <img src={this.state.url} alt="DogPhoto"></img>
        </div>
        <button onClick={this.fetchCall}>Next</button>
      </div>
    );
  }
}
export default Dog;
