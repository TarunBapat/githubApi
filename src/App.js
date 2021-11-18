import react from "react";
import SearchBar from "./SearchBar";
import Users from "./Users";
import UserDetail from "./UserDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function App() {
  return (
    <div>
      <SearchBar />

      <Switch>
        <Route path="/users" exact component={Users} />
        <Route path="/users/:id" exact component={UserDetail} />
      </Switch>
    </div>
  );
}
