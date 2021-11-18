import { useContext } from "react";
import { GithubContext } from "./githubApiContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Users = () => {
  let { userData } = useContext(GithubContext);
  let style = {
    width: "150px",
    height: "100px"
  };
  return (
    <Card
      style={{ maxWidth: "30rem", margin: "0 auto" }}
      className="d-flex justify-content-center align-tems-center"
    >
      <Card.Img variant="top" src={userData.avatar_url} />
      <Card.Body>
        <Card.Title>
          <b>{userData.bio}</b>
        </Card.Title>
        <Card.Text>
          <b>Company:</b> {userData.company}
        </Card.Text>
        <Card.Text>
          <b>Location:</b> {userData.location}
        </Card.Text>
        <Card.Text>
          <b>Total Repos:</b> {userData.public_repos}
        </Card.Text>

        <Link to={`/users/${userData.id}`}>
          <Button variant="primary">View Detail</Button>
        </Link>
      </Card.Body>
    </Card>
    // <div>
    //   <img src={userData.avatar_url} style={style} />
    //   <p>{userData.company}</p>
    // </div>
  );
};
export default Users;
