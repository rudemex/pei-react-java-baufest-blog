import React, { Component } from 'react';
import PostsList from '../components/PostsList/PostsList';
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState((prevState) => ({
          ...prevState,
          posts: data,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Blog</h1>

        <div className="content-list-of-posts">
          <PostsList posts={posts}/>
        </div>
      </div>
    );
  }
}

export default Blog;
