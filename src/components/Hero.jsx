import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Homemade Masalas</h1>

        <p className="hero-tagline">
          Made the Traditional Way
        </p>

        <p className="hero-description">
          BAASS Homemade Products brings you carefully prepared masalas made
          from handpicked ingredients, ground in small batches to preserve
          aroma, taste, and purity — just like home.
        </p>

        <div className="hero-actions">
          <a href="#products" className="btn primary">
            View Products
          </a>
          <a href="#contact" className="btn secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
