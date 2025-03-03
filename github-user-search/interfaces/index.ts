import { ReactNode } from "react";

export interface ReactComponent {
  children: ReactNode;
}

export interface GitHubUser {
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  html_url: string;
  public_repos: number;
  updated_at: string;
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  language: string | null;
}

export interface GitHubUserData {
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  html_url: string;
  totalRepos: number;
  recentRepo: { name: string; url: string } | null;
  topLanguages: string[];
  lastUpdated: string;
}

export interface GitHubStoreState {
  username: string;
  userData: GitHubUserData | null;
  searchHistory: { avatar_url: string; name: string }[];
  loading: boolean;
  error: string | null;
  setUsername: (username: string) => void;
  searchUser: () => Promise<void>;
  clearSearchHistory: () => void;
}
