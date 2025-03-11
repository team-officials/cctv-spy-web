import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // Loading state

  const navigate = useNavigate(); // useNavigate hook for navigation

  // Email and password validation logic
  const validateForm = () => {
    if (email !== 'indrani.banerjee18@gmail.com') {
      setError('You are not allowed here. Invalid email!');
      return false;
    }
    if (password !== 'QWL123QWWWW01') {
      setError('You are not allowed here. Invalid password!');
      return false;
    }
    setError('');  // Clear error if both are correct
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);  // Start loading animation

    // Simulate a 10-second delay
    setTimeout(() => {
      if (validateForm()) {
        // If validation passes, navigate to the dashboard
        navigate('/dashboard');  // Use navigate() to redirect
      }
      setIsLoading(false);  // Stop loading animation after 10 seconds
    }, 10000);  // 10 seconds delay
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">CCTV Camera Login</h2>
        
        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        {/* Loader (visible while loading) */}
        {isLoading && (
          <div className="flex justify-center items-center mb-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Access Code
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
