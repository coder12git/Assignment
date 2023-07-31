// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../../utils/supabase';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      console.log('Logged in successfully!', user);
      router.push('/main/dashboard');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        className='text-gray-500'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br/>
      <input
        type="password"
        className='text-gray-500'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
