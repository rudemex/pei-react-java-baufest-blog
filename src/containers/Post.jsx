import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div>
      <h1>Post</h1>
      <p>Este es el posteo: {this.props.match.params.id}</p>
    </div>;
  }
}

export default Post;