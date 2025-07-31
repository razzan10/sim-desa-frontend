import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Hero from "./components/hero";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
