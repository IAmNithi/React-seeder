import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./components/header";
import Main from "./components/main";
// import css
import "../css/style.css";

// import a file

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
