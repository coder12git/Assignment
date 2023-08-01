import React, { useState, useEffect } from "react";
import supabase from "@/utils/supabase";
import LogoutButton from "../../components/logout";
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
        <div className="grid justify-items-end p-5 ">
          <LogoutButton />
        </div>
        <div className="font-bold text-7xl text-center">Popular Movies</div>
        <MovieList />
      </>
    );
  }
  return <h1>Please Login first</h1>;
};

export default Dashboard;
