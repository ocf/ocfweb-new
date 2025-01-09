import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddPostForm from './AddPostForm';

function App() {
  const [posts, setPosts] = useState([]);

  // Fetch posts on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://supernova.ocf.berkeley.edu:8000/api/posts/');
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
    <div class="max-w-4xl mx-auto my-5 justify-center">
      <h1 class="text-3xl font-bold">Log In</h1>
      <p class="pb-2">
        Sorry! Before you can proceed, we need to know who you are. Please enter your OCF username and password below to continue.
      </p>
      <AddPostForm onPostAdded={handlePostAdded} />

      <br/>
      <h1 class="text-2xl font-bold">OCF Accounts</h1>
      <p>
        Your OCF account is specific to the Open Computing Facility; it's not the same as your university CalNet account or your email account.
      </p>

      <p>
        If you've never used OCF services before, it's possible you might not have an account at all. If that's the case, how about joining? 
      </p>
      <h2 class="text-xl">Testing area (very secure)</h2>
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

export default App;

