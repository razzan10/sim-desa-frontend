import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
