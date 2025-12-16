import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Baas Mart</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
