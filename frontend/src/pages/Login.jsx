import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm';

function Login() {
  const [posts, setPosts] = useState([]);

  // Fetch posts on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:15000/api/posts/');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostAdded = (newPost) => {
    // Option 1: Refetch all posts
    // fetchPosts();

    // Option 2: Append new post to state
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1 class="text-2xl font-bold">My Blog</h1>
      <LoginForm onPostAdded={handlePostAdded} />
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Login;

