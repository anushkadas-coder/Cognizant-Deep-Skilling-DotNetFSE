import React, { Component } from 'react';

class Posts extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data.slice(0, 5) })); // Sirf 5 posts le rahe hain
  }

  componentDidCatch(error, info) {
    alert("Error caught: " + error);
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <div key={post.id} style={{border:'1px solid blue', margin:'10px', padding:'10px'}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;