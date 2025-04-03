"use client";
import React from "react";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-5 border-2 border-gray-300 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Login Page</h1>
        <form>
          <label className="block mb-2">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md"
            />
          </label>
          <label className="block mb-2">
            Password
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
