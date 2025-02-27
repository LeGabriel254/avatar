"use client";

import React, { FormEvent, useCallback } from "react";
import useGitHubStore from "@/components/store/useGitHubStore";
import Link from "next/link";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const Search: React.FC = () => {
  const { username, setUsername, searchUser, userData, loading, error } = useGitHubStore();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    searchUser();
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles Init", engine);
    await loadSlim(engine); //  function to load particles
  }, []);

  return (
    <div className="flex flex-col  items-center mt-[5rem]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            size: { value: 1.5 },
            move: { enable: true, speed: 0.6 },
            opacity: { value: 0.7 },
            color: { value: ["#ff0000", "#ff7300", "#ffeb00"] },
          },
        }}
        className="absolute inset-0 pointer-events-none z-0"
      />
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
          className="p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-700">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we can't find the user</p>}

      {userData && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg flex flex-col items-center text-start">
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-lg" />
          <h2 className="mt-2 text-lg font-bold text-black">{userData.name || userData.login}</h2>
          <p className="mt-2 text-gray-900">📍 Location: <span className="text-cyan-400">{userData.location || "Not Available"}</span></p>
          <p className="mt-1 text-gray-900">📦 Total Repositories: <span className="text-emerald-400 font-semibold">{userData.totalRepos}</span></p>
          <p className="mt-1 text-gray-900">🚀 Last Committed Repo: <span className="text-orange-400">{userData.recentRepo}</span></p>
          <p className="mt-1 text-gray-900">🛠 Top Languages: <span className="text-yellow-300">{userData.topLanguages || "N/A"}</span></p>
          <p className="mt-1 text-gray-900">👀 Last Seen: <span className="text-pink-400">{userData.lastUpdated ? new Date(userData.lastUpdated).toLocaleDateString() : "N/A"}</span></p>

          <Link href={userData.html_url} target="_blank" className="text-blue-500 mt-2 hover:underline">
            Visit Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Search;