import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Header />
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
  );
}

export default App;
