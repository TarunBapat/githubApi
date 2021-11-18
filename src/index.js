import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GithubApiContextProvider from "./githubApiContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <GithubApiContextProvider>
        <App />
      </GithubApiContextProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
