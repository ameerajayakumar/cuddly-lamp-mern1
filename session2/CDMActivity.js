import React, { Component } from 'react';

class CDMActivity extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      console.log(prevProps.userId);
      console.log(this.props.userId);
      this.fetchCall();
    }
  }
  componentDidMount() {
    this.fetchCall();
  }
  fetchCall() {
    fetch(`https://reqres.in/api/users/${this.props.userId}`)
      .then((r) => r.json())
      .then((r) => console.log(r.data.email));
  }
  render() {
    return <h1>Hello CDM {this.props.userId}</h1>;
  }
}

export default CDMActivity;
