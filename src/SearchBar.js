import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchDataHandler = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };
  return <input type="text" value={searchValue} onChange={searchDataHandler} />;
};
export default SearchBar;
