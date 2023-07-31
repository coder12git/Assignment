// components/LogoutButton.js
import React from 'react';
import supabase from '../../utils/supabase';
import { useRouter } from 'next/router';

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      console.log('Logged out successfully!');
      router.push("/");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
