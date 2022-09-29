import React from 'react';
import axios from 'axios';
import Image from './FetchDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      url: 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg',
    };
  }
  getUser = async (event) => {
    let id = event.target.id;
    try {
      const response = await axios({
        url: `https://reqres.in/api/users/${id}`,
        method: 'get',
      });
      this.setState((state, props) => {
        state.email = response.data.data.email;
        state.name = response.data.data.first_name + ' ' + response.data.data.last_name;
        state.url = response.data.data.avatar;
        return { email: state.email, name: state.name, url: state.url };
      });
    } catch (error) {
      alert(`Failed to fetch data for the user: ${id}`);
      this.setState((state, props) => {
        state.email = '';
        state.name = '';
        state.url = '';
        return { email: state.email, name: state.name, url: state.url };
      });
    }
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.getUser} id="1">
            1
          </button>
          <span> </span>
          <button onClick={this.getUser} id="2">
            2
          </button>
          <span> </span>
          <button onClick={this.getUser} id="3">
            3
          </button>
          <span> </span>
          <button onClick={this.getUser} id="100">
            100
          </button>
          <ul>
            <li id="email">Email: {this.state.email}</li>
            <li id="name">Name: {this.state.name}</li>
          </ul>
          <Image url={this.state.url} />
        </div>
      </div>
    );
  }
}

export default App;
