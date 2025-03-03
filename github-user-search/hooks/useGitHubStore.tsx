import { create } from "zustand";
import { fetchUserData } from "@/services/fetchUserData";
import { GitHubStoreState, GitHubUserData } from "@/interfaces";

const useGitHubStore = create<GitHubStoreState>((set, get) => ({
  username: "",
  userData: null,
  searchHistory: [], // ✅ Stores last 5 searches
  loading: false,
  error: null,

  setUsername: (username) => set({ username }),

  searchUser: async () => {
    set({ loading: true, error: null });

    try {
      const username = get().username.trim();
      if (!username) {
        set({ error: "Username cannot be empty", loading: false });
        return;
      }

      const data: GitHubUserData = await fetchUserData(username);

      // Update search history (limit to last 5 searches)
      set((state) => {
        const updatedHistory = [
          { avatar_url: data.avatar_url, name: data.name || data.login },
          ...state.searchHistory.slice(0, 4), // Keep only last 4, so total is 5
        ];

        return {
          userData: {
            ...data,
            recentRepo: data.recentRepo || null,
            topLanguages: Array.isArray(data.topLanguages) ? data.topLanguages : [],
          },
          searchHistory: updatedHistory, // ✅ Stores recent searches
          loading: false,
        };
      });
    } catch (error: any) {
      set({ error: error.message || "Failed to fetch user data", loading: false });
    }
  },

  clearSearchHistory: () => set({ searchHistory: [] }), // ✅ Function to clear history
}));

export default useGitHubStore;
