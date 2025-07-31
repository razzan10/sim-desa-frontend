import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import News from "./pages/News";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <News />
      <Footer />
    </>
  );
}

export default App;
