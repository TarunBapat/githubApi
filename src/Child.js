import react from "react";

const Child = (props) => {
  let { id, login, avatar_url } = props.data;
  let style = {
    width: "100px",
    height: "50px"
  };
  return (
    <div>
      <img src={avatar_url} style={style} />
      <h1>{id}</h1>
      <p>{login}</p>
    </div>
  );
};

export default Child;
