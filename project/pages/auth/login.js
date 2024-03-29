// pages/login.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import supabase from "../../utils/supabase";
import Head from "next/head";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Error signing in:", error.message);
    } else {
      console.log("Logged in successfully!", user);
      router.push("/main/dashboard");
    }
  };

  return (
    <>
      <Head>
        <title>JET PROTOCOL | LOGIN</title>
      </Head>
      <div className="flex flex-col place-items-center mt-20 pt-20">
        <div className="pt-5 pb-5 text-2xl font-semibold">
          Please Login To Continue
        </div>
        <div className="border-8 border-white rounded-lg p-20">
          <div className="mb-6">
            <label
              className="block stroke-red-bg-btn  text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              cols="40"
              rows="5"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block stroke-red-bg-btn  text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <br></br>
          <div className="flex flex-col place-items-center">
            <button
              onClick={handleLogin}
              className="font-bold w-full  bg-green-900  text-white rounded p-2 hover:bg-green-500"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
