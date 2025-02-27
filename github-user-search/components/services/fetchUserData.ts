import axios from "axios";
import { GitHubUser,GitHubRepo } from "@/interfaces";


// Base API URL for GitHub user data
const BASE_URL = "https://api.github.com/users/";


/**
 * Fetches GitHub user data, their most recently updated repository, total repositories, and top languages.
 * @param username - The GitHub username to fetch data for.
 * @returns A promise resolving to an object containing user data.
 */
export const fetchUserData = async (username: string): Promise<{
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  html_url: string;
  totalRepos: number;
  recentRepo: string;
  lastUpdated: string | null;
  topLanguages: string;
}> => {
  try {
    // Fetch user profile & repositories in parallel (performance optimization)
    const [userResponse, reposResponse] = await Promise.all([
      axios.get<GitHubUser>(`${BASE_URL}${username}`),
      axios.get<GitHubRepo[]>(`${BASE_URL}${username}/repos?sort=updated&per_page=100`),
    ]);

    const userData = userResponse.data;
    const repos = reposResponse.data;

    // Determine the most recently updated repository
    const recentRepo = repos.length > 0 ? repos[0].name : "No recent repositories";
    const lastUpdated = repos.length > 0 ? repos[0].updated_at : null; // Return `null` instead of 'N/A'

    // Calculate the most used programming language
    const languageCount: Record<string, number> = {};
    repos.forEach((repo) => {
      if (repo.language) {
        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languageCount)
      .sort(([, countA], [, countB]) => countB - countA)
      .slice(0, 1)
      .map(([language]) => language)
      .join(", ") || "N/A";

    // Return structured user data
    return {
      avatar_url: userData.avatar_url,
      login: userData.login,
      name: userData.name || userData.login,
      location: userData.location || "Not Available",
      html_url: userData.html_url,
      totalRepos: userData.public_repos,
      recentRepo,
      lastUpdated,
      topLanguages,
    };
  } catch (error: any) {
    throw new Error(`Failed to fetch data for user: ${username} - ${error.response?.status || error.message}`);
  }
};
