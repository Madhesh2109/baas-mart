import "./ProductCategories.css";

const ProductCategories = () => {
  return (
    <section className="categories" id="categories">
      <div className="categories-container">
        <h2>Product Categories</h2>

        <div className="category-grid">
          <div className="category-card">
            <h3>Fresh Vegetables</h3>
            <p>Daily fresh vegetables sourced locally.</p>
          </div>

          <div className="category-card">
            <h3>Fruits</h3>
            <p>Seasonal and fresh fruits for everyday needs.</p>
          </div>

          <div className="category-card">
            <h3>Grocery Staples</h3>
            <p>Rice, dal, pulses, oil, and essential groceries.</p>
          </div>

          <div className="category-card">
            <h3>Spices & Masalas</h3>
            <p>Quality spices and masalas for daily cooking.</p>
          </div>

          <div className="category-card">
            <h3>Snacks & Packaged Foods</h3>
            <p>Popular snacks and trusted packaged brands.</p>
          </div>

          <div className="category-card">
            <h3>Household Essentials</h3>
            <p>Cleaning items and everyday household needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
