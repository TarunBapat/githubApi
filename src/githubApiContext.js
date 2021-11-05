import { createContext, useState } from "react";

export const GithubContext = createContext();
const GithubApiContextProvider = (props) => {
  const [dataInput, setDataInput] = useState("");
  return <GithubContext.Provider>{props.children}</GithubContext.Provider>;
};
export default GithubApiContextProvider;
