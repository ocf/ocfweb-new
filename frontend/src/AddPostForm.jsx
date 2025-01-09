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
      const response = await axios.post('http://supernova.ocf.berkeley.edu:8000/api/posts/', {
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
      alert('Error with POST:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br/>
        <div>
          <p class="text-lg font-bold">OCF Username</p>
          <input
            class="bg-slate-100"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <p class="text-lg font-bold">Password</p>
          <input
            class="bg-slate-100"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <br/>
        <button class="bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default AddPostForm;

