import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import { MyRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
    </div>
  );
}

export default App;
