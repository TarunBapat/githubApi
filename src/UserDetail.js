import react, { useContext, useState } from "react";
import { GithubContext } from "./githubApiContext";
import { Button } from "react-bootstrap";

const UserDetail = () => {
  const { userData } = useContext(GithubContext);
  const [repos, setRepos] = useState([]);
  const fetchRepos = async () => {
    const repo = await fetch(
      `https://api.github.com/users/${userData.login}/repos`
    );
    const resp = await repo.json();
    setRepos(resp);
  };
  return (
    <div>
      <div className="container-left">
        <img src={userData.avatar_url} />
      </div>
      <div className="container-right">
        <h1>My Repos</h1>
        <Button onClick={fetchRepos}>Fetch Repos</Button>
        {repos.map((repo) => {
          return (
            <>
              <p>{repo.name}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetail;
