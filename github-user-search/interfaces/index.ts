import { ReactNode } from "react";


export interface ReactComponent{
  children:ReactNode
}
// Define TypeScript interfaces for user and repository data
export interface GitHubUser {
  avatar_url: string;
  login: string;
  name?: string;
  location?: string;
  html_url: string;
  public_repos: number;
}

export interface GitHubRepo {
  name: string;
  updated_at: string;
  language?: string;
}


// Defines the shape of user data (matches fetchUserData return type)
export interface GitHubUserData {
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  html_url: string;
  totalRepos: number;
  recentRepo: string;
  lastUpdated: string | null;
  topLanguages: string;
}

// Defines the Zustand store state & actions
export interface GitHubStoreState {
  username: string;
  userData: GitHubUserData | null;
  loading: boolean;
  error: string | null;
  setUsername: (username: string) => void;
  searchUser: () => Promise<void>;
}
