import { useState, useContext } from "react";
import { GithubContext } from "./githubApiContext";
import { Button, InputGroup, FormControl } from "react-bootstrap";
const SearchBar = () => {
  let { searchValue, searchDataHandler, userDataHandler } = useContext(
    GithubContext
  );
  return (
    <div
      style={{ margin: "20px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={searchValue}
          onChange={searchDataHandler}
        />
        <Button variant="primary" onClick={userDataHandler}>
          submit
        </Button>
      </InputGroup>
      {/* <input type="text" value={searchValue} onChange={searchDataHandler} /> */}
    </div>
  );
};
export default SearchBar;
