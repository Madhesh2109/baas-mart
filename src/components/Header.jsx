import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          Baas<span>Mart</span>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#categories">Products</a>
          <a href="#location">Location</a>
        </nav>

        <div className="header-actions">
          <a href="tel:+918428333607" className="btn primary">
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
