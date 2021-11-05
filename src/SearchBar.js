import { useState, useContext } from "react";
import { GithubContext } from "./githubApiContext";

const SearchBar = () => {
  let { searchValue, searchDataHandler, userDataHandler } = useContext(
    GithubContext
  );
  return (
    <div>
      <input type="text" value={searchValue} onChange={searchDataHandler} />
      <button onClick={userDataHandler}>submit</button>
    </div>
  );
};
export default SearchBar;
