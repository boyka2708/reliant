"use client";
import React, { useState } from 'react';
import { useStore } from '../../store/store'; // Adjust the path to your Zustand store
import { signIn, signUp, signInWithGoogle } from '../../auth'; // Adjust the path to your Firebase functions
import { useRouter } from 'next/navigation';
import { Email, Google } from '@mui/icons-material';

const LoginPage = () => {
  const { setUser } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false); // Track whether the user is signing up or signing in
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleAuth = async () => {
    try {
      let user;
      if (isSigningUp) {
        user = await signUp(email, password);
        alert('Please check your email for the verification link.');
      } else {
        user = await signIn(email, password);
        setUser(user);
        router.push('/account');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || 'An error occurred during authentication.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };
  

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      setUser(user);
      router.push('/account'); 
    } catch (error) {
      setError('Failed to sign in with Google.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-4 w-80"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-4 w-80"
      />
      <button
        onClick={handleAuth}
        className="bg-blue-500 text-white px-4 py-2 mb-4 w-80"
      >
        {isSigningUp ? 'Sign Up with Email' : 'Sign In with Email'} <Email/>
      </button>

      <p className='mb-3'>OR</p>

      <button
        onClick={handleGoogleSignIn}
        className="bg-red-500 text-white px-4 py-2 w-80"
      >
        Sign In with Google <Google/>
      </button>

      <button
        onClick={() => setIsSigningUp(!isSigningUp)}
        className="text-blue-500 mt-4"
      >
        {isSigningUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
      </button>
    </div>
  );
};

export default LoginPage;
