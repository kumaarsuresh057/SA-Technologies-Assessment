import React, { Component } from "react";
import QuestionList from "./QuestionList";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <QuestionList />
        </main>
      </div>
    );
  }
}

export default App;
