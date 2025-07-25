import "../styles/Hero.css";
import heroBg from "../assets/hero-pic.jpg";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="overlay" />
      <div className="container">
        <div className="full-screen">
          <div className="home-content">
            <div className="block">
              <h6>Simulasi Web Desa</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
