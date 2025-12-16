import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Baas Mart</h1>
        <p className="hero-tagline">
          Your Trusted Local Grocery Store
        </p>

        <p className="hero-description">
          Fresh vegetables, groceries, and daily essentials at honest prices.
          Serving the local community with quality and trust.
        </p>

        <div className="hero-actions">
          <a href="tel:+918428333607" className="btn primary">
            WhatsApp
          </a>
          <a href="#location" className="btn secondary">
            Visit Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
