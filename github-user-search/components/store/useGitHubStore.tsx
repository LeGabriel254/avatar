import { create } from "zustand";
import { fetchUserData } from "@/components/services/fetchUserData";
import { GitHubStoreState, UserData } from "@/interfaces";

const useGitHubStore = create<GitHubStoreState>((set, get) => ({
  username: "",
  userData: null,
  loading: false,
  error: null,

  setUsername: (username: string) => set({ username }),

  searchUser: async () => {
    set({ loading: true, error: null, userData: null });
    try {
      const username = get().username.trim();
      if (!username) {
        throw new Error("Username cannot be empty");
      }

      const data: UserData = await fetchUserData(username);
      set({ userData: data });
    } catch (err) {
      set({ error: err instanceof Error ? err.message : "An unknown error occurred" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useGitHubStore;
