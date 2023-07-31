// pages/signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../../utils/supabase';

const SignupPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('Signed up successfully!', user);
      router.push('/auth/login');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="email"
        className='text-gray-400'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br/>
      <input
        type="password"
        className='text-gray-400'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupPage;
