import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onPostAdded }) {
  // Local state for the new post
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (optional)
    if (!user || !pass) {
      alert('Username and password both required');
      return;
    }

    try {
      // Make POST request to Django backend
      const response = await axios.post('http://127.0.0.1:15000/api/posts/', {
        title,
        content,
      });
      
      // Optionally, inform the parent component or refresh a post list
      if (onPostAdded) {
        onPostAdded(response.data);
      }

      // Clear form
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            style={styles.input}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            style={styles.textarea}
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button style={styles.button} type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

