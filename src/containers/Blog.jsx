import React, { Component } from 'react';

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
          <ul>
            {posts &&
              posts.map((post) => (
                <li key={post.id}>
                  <div>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Blog;
