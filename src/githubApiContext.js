import { createContext, useState } from "react";

export const GithubContext = createContext();
const GithubApiContextProvider = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState([]);
  const searchDataHandler = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };
  const userDataHandler = async () => {
    const response = await fetch(`https://api.github.com/users/${searchValue}`);
    const data = await response.json();
    setUserData(data);
    console.log(userData);
  };
  let value = {
    searchValue,
    setSearchValue,
    userData,
    setUserData,
    searchDataHandler,
    userDataHandler
  };
  return (
    <GithubContext.Provider value={value}>
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubApiContextProvider;
