import React, { Component } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Welcome from "./Welcome";
import Process from "./Process";
import Footer from "./Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Welcome />
        <Process />
        <Footer />
      </div>
    );
  }
}

export default App;
