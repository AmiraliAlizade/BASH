import { useSearchParams } from "react-router";
import "./SearchInput.css";
import { useState } from "react";

function SearchInput() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState("");
  const search = searchParam.get("q") || "";
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
    </div>
  );
}

export default SearchInput;
