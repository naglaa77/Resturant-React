import { Fragment } from "react";
import "./App.css";
import Home from "./component/Home.js/Home";
import Navs from "./component/Navs/Navs";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
    </Fragment>
  );
}

export default App;
