import React from "react";
import GridPost from "../post/gridPost";
import ProfileCard from "../profile/ProfileCard";
interface SearchOverlayProps {
  searchResults: any[];
  searchType: string;
  onClose: () => void;
}

const ExploreSearchOverlay: React.FC<SearchOverlayProps> = ({
  searchResults,
  searchType,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg w-3/4">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Search Results</h2>
          <button onClick={onClose} className="text-gray-600">
            Close
          </button>
        </div>

        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div>
            {searchType === "name" ? (
              <>
                {searchResults.map((result) => (
                  <ProfileCard user={result} />
                ))}
              </>
            ) : searchType === "hashtag" ? (
              <GridPost posts={searchResults} />
            ) : searchType === "username" ? (
              <>
                {searchResults.map((result) => (
                  <ProfileCard user={result} />
                ))}
              </>
            ) : (
              <p>No results found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreSearchOverlay;
