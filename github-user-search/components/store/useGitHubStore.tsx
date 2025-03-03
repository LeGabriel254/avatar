import { create } from "zustand";
import { fetchUserData } from "@/components/services/fetchUserData"; // Import the fetch function
import { GitHubStoreState } from "@/interfaces";

const useGitHubStore = create<GitHubStoreState>((set, get) => ({
  username: "",
  userData: null,
  loading: false,
  error: null,
  
  setUsername: (username) => set({ username }),

  searchUser: async () => {
    set({ loading: true, error: null });

    try {
      const username = get().username; // Use `get()` correctly
      if (!username) {
        set({ error: "Username cannot be empty", loading: false });
        return;
      }

      const data = await fetchUserData(username);

      set({
        userData: {
          ...data,
          recentRepo: data.recentRepo || null, // Ensure recentRepo is handled
          topLanguages: Array.isArray(data.topLanguages) ? data.topLanguages : [], // Ensure it's an array
        },
        loading: false,
      });
    } catch (error: any) {
      set({ error: error.message || "Failed to fetch user data", loading: false });
    }
  },
}));

export default useGitHubStore;
