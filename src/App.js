import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title="hello" />
      </Fragment>
    );
  }
}

export default App;
