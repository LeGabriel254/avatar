import { create } from "zustand";
import { fetchUserData } from "@/components/services/fetchUserData";
import { GitHubStoreState } from "@/interfaces";


// Zustand store
const useGitHubStore = create<GitHubStoreState>((set: (arg0: { username?: string; loading?: boolean; error?: any; userData?: { avatar_url: string; login: string; name: string; location: string; html_url: string; totalRepos: number; recentRepo: string; lastUpdated: string | null; topLanguages: string; } | null; }) => void, get: () => { username: any; }) => ({
  username: "",
  userData: null,
  loading: false,
  error: null,

  setUsername: (username: string) => set({ username }),

  searchUser: async () => {
    set({ loading: true, error: null, userData: null });
    try {
      const { username } = get(); // Get current username
      if (!username.trim()) {
        throw new Error("Username cannot be empty");
      }

      const data = await fetchUserData(username);
      set({ userData: data });
    } catch (err: any) {
      set({ error: err.message || "An error occurred" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useGitHubStore;
