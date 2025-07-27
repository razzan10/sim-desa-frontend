import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Berita from "./components/Berita";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Berita />
      <Footer />
    </>
  );
}

export default App;
