import axios from "axios";
import { GitHubUser } from "@/interfaces";

const BASE_URL = "https://api.github.com/users/";

export const fetchUserData = async (username: string): Promise<{
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  html_url: string;
  totalRepos: number;
  recentRepo: { name: string; url: string } | null;
  topLanguages: string[]; // Fix: Ensure correct type
  lastUpdated: string;
}> => {
  try {
    const { data } = await axios.get<GitHubUser>(`${BASE_URL}${username}`);

    // Fetch repos to determine top languages
    const reposResponse = await axios.get(`${BASE_URL}${username}/repos?per_page=3&sort=updated`);
    const repos = Array.isArray(reposResponse.data) ? reposResponse.data : [];

    // Get the most recent repo
    const recentRepo = repos.length > 0
      ? { name: repos[0].name, url: repos[0].html_url }
      : null;

    // Aggregate languages from repositories
    const languageCounts: Record<string, number> = {};
    repos.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languageCounts)
      .sort(([, countA], [, countB]) => countB - countA)
      .slice(0, 1)
      .map(([language]) => language); // Fix: Return as array, not string

    return {
      avatar_url: data.avatar_url,
      login: data.login,
      name: data.name || data.login,
      location: data.location || "Not Available",
      html_url: data.html_url,
      totalRepos: data.public_repos || 0,
      recentRepo,
      topLanguages, // Fix: Ensures an array is returned
      lastUpdated: data.updated_at || new Date().toISOString(),
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch data: ${error.response?.status || error.message}`);
    }
    throw new Error("An unexpected error occurred.");
  }
};
