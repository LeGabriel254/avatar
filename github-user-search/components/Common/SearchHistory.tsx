import useGitHubStore from "@/hooks/useGitHubStore";

const SearchHistory = () => {
  const { searchHistory, clearSearchHistory } = useGitHubStore();

  if (searchHistory.length === 0) return null; // Don't show if no history

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Search History:</h2>
      <div className="mt-4 p-4 border rounded-lg bg-gray-100">

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Recent Searches:</span>
          <button
            className="text-red-600 text-sm ml-0.5 cursor-pointer hover:underline"
            onClick={clearSearchHistory}
          >
            Clear History
          </button>
        </div>

        <ul>
          {searchHistory.map((user, index) => (
            <li
              key={index}
              className="flex items-center gap-3 mb-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg transition-all"
              onClick={() => window.open(`https://github.com/${user.name}`, "_blank")}
            >
              <img
                src={user.avatar_url}
                alt={user.name}
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <span className="text-amber-950 font-medium">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchHistory;
