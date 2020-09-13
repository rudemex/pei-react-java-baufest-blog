import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      id: this.props.match.params.id,
    }));
  }

  updateState = () => {
    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState,
        id: 8,
      }));
    }, 5000);
  };

  render() {
    const { id } = this.state;

    return (
      <div>
        <h1>Post</h1>
        <p>Este es el posteo: {id}</p>
        {this.updateState()}
      </div>
    );
  }
}

export default Post;
