import { ReactNode } from "react";


export interface ReactComponent{
  children:ReactNode
}
// Define TypeScript interfaces for user and repository data
export interface GitHubUser {
  updated_at: string;
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
export interface GitHubStoreState {
  username: string;
  userData: {
    avatar_url: string;
    login: string;
    name: string;
    location: string;
    html_url: string;
    totalRepos: number;
    recentRepo: { name: string; url: string } | null; // Corrected type
    topLanguages: string[]; // Ensured it's an array
    lastUpdated: string;
  } | null;
  loading: boolean;
  error: string | null;
  setUsername: (username: string) => void;
  searchUser: () => Promise<void>;
}

export interface UserData {
  avatar_url: string;
  login: string;
  name?: string;
  location?: string;
  html_url: string;
  totalRepos?: number;
  recentRepo?: string;
  lastUpdated?: string | null;
  topLanguages?: string;
}


