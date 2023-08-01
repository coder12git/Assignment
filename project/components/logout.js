// components/LogoutButton.js
import React from "react";
import supabase from "../utils/supabase";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      console.log("Logged out successfully!");
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 font-bold  bg-red-900  text-white rounded p-2 hover:bg-red-500"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
