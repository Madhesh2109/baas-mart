import "./ProductReveal.css";
import sambar from "../assets/sambar.png";
import rasam from "../assets/sambar.png";
import chilli from "../assets/chilli.png";

export default function ProductReveal() {
  return (
    <section id="products" className="products">
      <div className="products-inner">
        <h2 className="products-title">What we prepare</h2>

        <div className="products-track">
          <div className="product-block">
            <div className="product-image">
              <img src={sambar} alt="Sambar Masala" />
            </div>
            <h3>Sambar Masala</h3>
            <p>
              Balanced for everyday cooking — not overly spicy,
              not toned down for shelves.
            </p>
          </div>

          <div className="product-block">
            <div className="product-image">
              <img src={rasam} alt="Rasam Powder" />
            </div>
            <h3>Rasam Powder</h3>
            <p>
              Pepper-forward and aromatic,
              meant to be used generously, not sparingly.
            </p>
          </div>

          <div className="product-block">
            <div className="product-image">
              <img src={chilli} alt="Chilli Powder" />
            </div>
            <h3>Chilli Powder</h3>
            <p>
              Made from carefully dried chillies,
              ground fresh in small quantities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
