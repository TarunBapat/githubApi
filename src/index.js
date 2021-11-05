import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GithubApiContextProvider from "./githubApiContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GithubApiContextProvider>
      <App />
    </GithubApiContextProvider>
  </StrictMode>,
  rootElement
);
