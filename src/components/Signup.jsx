// Signup.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../config/firebase";
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // ✅ Create user in Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered in Firebase:', { email });

      // ✅ Also store in your MongoDB backend
      await axios.post('http://localhost:5000/api/signup', {
        username: email.split('@')[0],
        email,
        password  // ⚠️ Backend will hash it
      });

      console.log('User saved in MongoDB');
      navigate('/home');
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-10 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <p className="text-blue-600 cursor-pointer my-2" onClick={() => navigate("/login")}>
          Already have an account? Login here
        </p>

        <button type="submit" className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
