import "./Products.css";

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2>Our Products</h2>

        <div className="products-grid">
          <div className="product-card">
            <h3>Sambar Powder</h3>
            <p>
              A balanced blend prepared for everyday sambar with natural
              aroma and traditional taste.
            </p>
          </div>

          <div className="product-card">
            <h3>Rasam Powder</h3>
            <p>
              Carefully prepared to bring out the sharp, comforting flavor
              of classic rasam.
            </p>
          </div>

          <div className="product-card">
            <h3>Curry Masala</h3>
            <p>
              Suitable for a variety of vegetable and non-vegetarian curries,
              maintaining consistent flavor.
            </p>
          </div>

          <div className="product-card">
            <h3>Garam Masala</h3>
            <p>
              A mild yet aromatic blend used to enhance dishes without
              overpowering them.
            </p>
          </div>

          <div className="product-card">
            <h3>Special Masala Blends</h3>
            <p>
              Limited homemade blends prepared occasionally based on
              traditional recipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
