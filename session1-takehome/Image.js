import React, { Component } from 'react';

class Image extends Component {
  render() {
    return <img id="image" src={this.props.url} alt="UserPhoto"></img>;
  }
}

export default Image;
