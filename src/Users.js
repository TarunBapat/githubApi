import { useContext } from "react";
import { GithubContext } from "./githubApiContext";
const Users = () => {
  let { userData } = useContext(GithubContext);
  let style = {
    width: "150px",
    height: "100px"
  };
  return (
    <div>
      <img src={userData.avatar_url} style={style} />
      <p>{userData.company}</p>
    </div>
  );
};
export default Users;
