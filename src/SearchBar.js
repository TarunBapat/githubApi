import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState([]);
  const searchDataHandler = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };
  const userDataHandler = async () => {
    const response = await fetch(`https://api.github.com/users/${searchValue}`);
    const data = await response.json();
    setUserData(userData);
    console.log(userData);
  };
  return (
    <div>
      <input type="text" value={searchValue} onChange={searchDataHandler} />
      <button onClick={userDataHandler}>submit</button>
    </div>
  );
};
export default SearchBar;
