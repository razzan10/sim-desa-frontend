import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
