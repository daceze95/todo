import React, { useState } from 'react';
import { signup, signin } from '../utils/auth';
import { useNavigate } from 'react-router-dom'; // ✅

const Auth = () => {
  const navigate = useNavigate(); // ✅
  const [isSignup, setIsSignup] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Username and password required');
      return;
    }

    const error = isSignup ? signup(username, password) : signin(username, password);

    if (error) {
      setMessage(error);
    } else {
      setMessage('');
      // ✅ Navigate to home after successful sign-in
      if (!isSignup) {
        navigate('/');
      } else {
        setMessage('Signup successful! Please sign in.');
        setIsSignup(false); // Switch to signin after signup
      }
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-8">
      <h2 className="text-2xl mb-4 text-center">{isSignup ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2"
        />
        <button className="bg-black text-white px-4 py-2" type="submit">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      {message && <p className="text-red-500 mt-2">{message}</p>}
      <button
        onClick={() => {
          setIsSignup(!isSignup);
          setMessage('');
        }}
        className="mt-4 underline text-sm text-blue-600"
      >
        Switch to {isSignup ? 'Sign In' : 'Sign Up'}
      </button>
    </div>
  );
};

export default Auth;
