import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </>
  );
}

export default App;
