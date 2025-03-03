"use client";

import React, { FormEvent, useCallback, useState } from "react";
import useGitHubStore from "@/hooks/useGitHubStore";
import Link from "next/link";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import Image from "next/image";
import debounce from "lodash.debounce";

const Search: React.FC = () => {
  const { username, setUsername, searchUser, userData, loading, error } = useGitHubStore();
  const [input, setInput] = useState(username);

  // Debounce input changes to reduce unnecessary state updates
  const handleInputChange = useCallback(
    debounce((value: string) => setUsername(value.trim()), 400),
    []
  );

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    searchUser();
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="flex flex-col items-center mt-[5rem] relative">
      {/* Background Particles */}
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

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex gap-2 z-10">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            handleInputChange(e.target.value);
          }}
          placeholder="Enter GitHub username"
          required
          className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 outline-none transition"
        />
        <button
          type="submit"
          className={`p-2 rounded-lg transition ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="mt-4 text-gray-700 animate-pulse">Fetching user data...</p>}

      {/* Error Message */}
      {error && (
        <div className="mt-4 text-red-500 flex flex-col items-center">
          <p>{error}</p>
          <button
            onClick={searchUser}
            className="mt-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Retry
          </button>
        </div>
      )}

      {/* User Profile Display */}
      {userData && (
        <div className="mt-6 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-start z-10">
          <Image
            src={userData.avatar_url}
            alt={userData.login}
            width={100}
            height={100}
            className="rounded-full border-4 border-indigo-500 shadow-lg"
          />
          <h2 className="mt-2 text-lg font-bold text-black">{userData.name || userData.login}</h2>
          <p className="mt-2 text-gray-900">
            📍 Location:{" "}
            <span className="text-cyan-400">{userData.location || "N/A"}</span>
          </p>

          <p className="mt-1 text-gray-900">
            🚀 Last Repo:{" "}
            {userData.recentRepo?.name ? (
              <Link
                href={userData.recentRepo.url}
                target="_blank"
                className="text-orange-400 hover:underline"
              >
                {userData.recentRepo.name}
              </Link>
            ) : (
              <span className="text-gray-500">N/A</span>
            )}
          </p>

          <p className="mt-1 text-gray-900">
            🛠 Top Languages:{" "}
            <span className="text-yellow-300">
              {userData.topLanguages.length > 0
                ? userData.topLanguages.join(", ")
                : "N/A"}
            </span>
          </p>

          <p className="mt-1 text-gray-900">
            👀 Last Seen:{" "}
            <span className="text-pink-400">
              {userData.lastUpdated ? new Date(userData.lastUpdated).toLocaleDateString() : "N/A"}
            </span>
          </p>

          <Link
            href={userData.html_url}
            target="_blank"
            className="text-blue-500 mt-2 hover:underline"
          >
            Visit Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Search;
