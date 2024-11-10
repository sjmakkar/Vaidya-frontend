import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    fetch('http://localhost:8080/login/doctor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userEmail, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Call the function to handle redirection after successful login
          onLoginSuccess();
        } else {
          alert('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Login error');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col">
        <label htmlFor="userEmail" className="text-lg font-semibold text-gray-700">Email</label>
        <input
          id="userEmail"
          name="userEmail"
          type="userEmail"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-lg font-semibold text-gray-700">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      <button
        type="submit"
        className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
