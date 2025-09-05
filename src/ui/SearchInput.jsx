import { useSearchParams } from "react-router";
import "./SearchInput.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSearchHistory } from "../services/apiSearch";

function SearchInput() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState("");
  const search = searchParam.get("q") || "";

  const { data: SearchHistory } = useQuery({
    queryKey: ["SearchHistory"],
    queryFn: getSearchHistory,
  });

  console.log(SearchHistory);

  const firstSearchHistory = SearchHistory || [];
  function handleParam(e) {
    const value = e.target.value;
    if (value) {
      setSearchParam({ q: value });
    } else {
      setSearchParam({});
    }
  }

  return (
    <div className="search-input-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Search for houses"
        value={search}
        onChange={handleParam}
      />
      <div className="search-history-wrapper">
        <ul className="search-history-list">
          {firstSearchHistory.map((searchHistory) => (
            <li className="search-history-item" key={searchHistory.id}>
              {searchHistory.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchInput;
