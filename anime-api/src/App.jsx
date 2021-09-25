import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./styles/main.css";
import { links } from "./util/consts";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links
          .filter((link) => link.text !== "Home")
          .map((link) => {
            const { id, url, page } = link;
            return <Route path={url}>{page}</Route>;
          })}
      </Switch>
    </>
  );
}

export default App;
