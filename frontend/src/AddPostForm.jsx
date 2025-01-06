import React, { useState } from 'react';
import axios from 'axios';

function AddPostForm({ onPostAdded }) {
  // Local state for the new post
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (optional)
    if (!title || !content) {
      alert('Please fill out both title and content.');
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
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            style={styles.input}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
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

// Optional inline styling
const styles = {
  formContainer: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '16px',
    maxWidth: '400px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '80px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AddPostForm;

