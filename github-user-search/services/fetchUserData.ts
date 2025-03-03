import axios from "axios";
import { GitHubUser, GitHubRepo, GitHubUserData } from "@/interfaces/index";

const BASE_URL = "https://api.github.com/users/";

export const fetchUserData = async (username: string): Promise<GitHubUserData> => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      axios.get<GitHubUser>(`${BASE_URL}${username}`),
      axios.get<GitHubRepo[]>(`${BASE_URL}${username}/repos?per_page=3&sort=updated`)
    ]);

    const userData = userResponse.data;
    const repos = Array.isArray(reposResponse.data) ? reposResponse.data : [];

    const recentRepo = repos.length > 0
      ? { name: repos[0].name, url: repos[0].html_url }
      : null;

    const languageCounts: Record<string, number> = {};
    repos.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languageCounts)
      .sort(([, countA], [, countB]) => countB - countA)
      .slice(0, 2)
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
