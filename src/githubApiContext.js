import { createContext, useState } from "react";

export const GithubContext = createContext();
const GithubApiContextProvider = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState([]);
  const searchDataHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const userDataHandler = async () => {
    const response = await fetch(`https://api.github.com/users/${searchValue}`);
    try {
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } else {
        throw new Error("enter a valid user");
      }
    } catch (err) {
      console.log(err.message);
    }
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
