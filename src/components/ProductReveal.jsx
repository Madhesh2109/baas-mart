import "./ProductReveal.css";

export default function ProductReveal() {
  return (
    <section className="products">
      <div className="products-inner">
        <h2 className="products-title">
          What we prepare
        </h2>

        <div className="product-item">
          <h3>Sambar Masala</h3>
          <p>
            Balanced for everyday cooking — not overly spicy,
            not toned down for shelves.
          </p>
        </div>

        <div className="product-item">
          <h3>Rasam Powder</h3>
          <p>
            Pepper-forward, light on additives,
            meant to be used generously.
          </p>
        </div>

        <div className="product-item">
          <h3>Chilli Powder</h3>
          <p>
            Made from carefully dried chillies,
            ground fresh in small quantities.
          </p>
        </div>
      </div>
    </section>
  );
}
