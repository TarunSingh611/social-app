"use client";
import UserLayout from "@/layouts/UserLayout";
import { useEffect, useState } from "react";
import GridPost from "@/components/post/gridPost";
import {ProfileSearchCard} from "@/components/profile/ProfileCard";
import { useSelector } from "react-redux";
import apiGetExplore from "@/api/explore/apiGetExplore";
import apiGetExploreSearch from "@/api/search/exploreSearch";
const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOverlayVisible, setIsSearchOverlayVisible] = useState(false);
  const [searchType, setSearchType] = useState("name");
  const [searchResult, setSearchResult] = useState([]);
  const [explore, setExplore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state: any) => state.auth.user);
  const handleSearch = () => {
    if (searchQuery.length === 0) {
      return;
    }
    setIsLoading(true);
    apiGetExploreSearch({ data: searchQuery, type: searchType }).then(
      (res: any) => {
        if (res.statusCode === 200) {
          setSearchResult(res.result);
        }
      }
    );
    setIsSearchOverlayVisible(true);
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) {
      apiGetExplore().then((res: any) => {
        if (res.statusCode === 200) {
          setExplore(res?.posts||[]);
        }
      });
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    if(searchQuery.length==0){
      setIsSearchOverlayVisible(false)
    }
    
  },[searchQuery])

  useEffect(() => {
    handleSearch()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchType])

  return (
    <div className="midInfo container mx-auto p-4">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded"
        >
          <option value="hashtag">Hashtag</option>
          <option value="name">Name</option>
          <option value="username">Username</option>
        </select>
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      {isLoading ? (
                  <div className="bg-white p-4 text-center my-auto shadow-sm rounded-lg w-full"><p>Loading . . .</p></div>
      ):(
      isSearchOverlayVisible ? (
        
        searchResult.length<1?(
          <div className="bg-white p-4 text-center my-auto shadow-sm rounded-lg w-full"><p>No results found.</p></div>
        ):(<div>
          {searchType === "name" ? (
            <>
              {searchResult.map((result) => (
                <ProfileSearchCard key={result._id} user={result} />
              ))}
            </>
          ) : searchType === "hashtag" ? (
            <GridPost posts={searchResult} />
          ) : searchType === "username" ? (
            <>
              {searchResult.map((result) => (
                <ProfileSearchCard key={result._id} user={result} />
              ))}
            </>
          ) : (
            <p>No results found.</p>
          )}
        </div>)
      ) : (
        <div className="">
          {explore.length > 0 && <GridPost posts={explore} />}
        </div>
      )
      )}
    </div>
  );
};

Explore.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Explore;
