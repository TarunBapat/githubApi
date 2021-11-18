import react, { useContext } from "react";
import { GithubContext } from "./githubApiContext";

const UserDetail = () => {
  const { userData } = useContext(GithubContext);
  return (
    <div>
      <img src={userData.avatar_url} />
    </div>
  );
};

export default UserDetail;
