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
  topLanguages: string[]; 
  lastUpdated: string;
}> => {
  try {
    // Fetch user data and repos in parallel to reduce load time
    const [userResponse, reposResponse] = await Promise.all([
      axios.get<GitHubUser>(`${BASE_URL}${username}`),
      axios.get(`${BASE_URL}${username}/repos?per_page=3&sort=updated`)
    ]);

    const userData = userResponse.data;
    const repos = Array.isArray(reposResponse.data) ? reposResponse.data : [];

    // Extract recent repo
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
      .slice(0, 2) // Get top 2 instead of just 1
      .map(([language]) => language);

    return {
      avatar_url: userData.avatar_url,
      login: userData.login,
      name: userData.name || userData.login,
      location: userData.location || "Not Available",
      html_url: userData.html_url,
      totalRepos: userData.public_repos || 0,
      recentRepo,
      topLanguages, 
      lastUpdated: userData.updated_at || new Date().toISOString(),
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch data: ${error.response?.status || error.message}`);
    }
    throw new Error("An unexpected error occurred.");
  }
};
