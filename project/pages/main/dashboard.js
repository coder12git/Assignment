import React, { useState, useEffect } from "react";
import supabase from "@/utils/supabase";
import LogoutButton from "../auth/logout";
import MovieList from "../../components/movie_card";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUserData() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    }

    fetchUserData();
  }, []);
  if (user) {
    return (
      <>
        <MovieList/>
        <LogoutButton />
      </>
    );
  }
  return (
    <h1>Please Login first</h1>
  )
};

export default Dashboard;
