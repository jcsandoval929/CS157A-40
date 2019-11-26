import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import ButtonAppBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ButtonAppBar {...this.props}>
            <BaseRouter />
          </ButtonAppBar>
        </Router>
      </div>
    );
  }
}

export default App;
