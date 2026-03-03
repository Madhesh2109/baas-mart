import "./ProductReveal.css";
import sambarPowder from "../assets/sambar.png";
import rasamPowder from "../assets/rasam.png";
import chilliPowder from "../assets/chilli.png";
import briyaniPowder from "../assets/briyani.jpg";
import idlyChilliPowder from "../assets/idly.jpeg";
import kulambuPowder from "../assets/kulambu.jpg";
import kariMasalaPowder from "../assets/kari-masala.png";
import chickenGravyPowder from "../assets/chicken-gravy.png";
import chicken65Powder from "../assets/chicken-65.png";

export default function ProductReveal() {
  return (
    <section id="products" className="products">
      <div className="products-inner">
        <h2 className="products-title">What we prepare</h2>

        <div className="products-track">
          <div className="product-block">
            <div className="product-image">
              <img src={sambarPowder} alt="Sambar Masala" />
            </div>
            <h3>Sambar Powder</h3>
            <p>
              Balanced for everyday cooking — not overly spicy,
              not toned down for shelves.
            </p>
          </div>

          <div className="product-block">
            <div className="product-image">
              <img src={rasamPowder} alt="Rasam Powder" />
            </div>
            <h3>Rasam Powder</h3>
            <p>
              Pepper-forward and aromatic,
              meant to be used generously, not sparingly.
            </p>
          </div>

          <div className="product-block">
            <div className="product-image">
              <img src={chilliPowder} alt="Chilli Powder" />
            </div>
            <h3>Chilli Powder</h3>
            <p>
              Made from carefully dried chillies,
              ground fresh in small quantities.
            </p>
          </div>

          <div className="product-block">
            <div className="product-image">
              <img src={briyaniPowder} alt="Briyani Masala Powder" />
            </div>
            <h3>Briyani Masala Powder</h3>
            <p>
              Traditional spice blend for rich and aromatic briyani.
            </p>
          </div>

          <div className="product-block">
            <div className="product-image">
              <img src={idlyChilliPowder} alt="Idly Chilli Powder" />
            </div>
            <h3>Idly Chilli Powder</h3>
            <p>
              Perfect spicy companion for idly and dosa.
            </p>
          </div>

          <div className="product-block">
            <div className="product-image">
              <img src={kulambuPowder} alt="Kulambu Powder" />
            </div>
            <h3>Kulambu Powder</h3>
            <p>
              Authentic South Indian kulambu masala blend.
            </p>
          </div>
          
          <div className="product-block">
            <div className="product-image">
              <img src={kariMasalaPowder} alt="Kari Masala Powder" />
            </div>
            <h3>Kari Masala Powder</h3>
            <p>
              All-purpose masala for everyday cooking.
            </p>
          </div>

          <div className="product-block">
            <div className="product-image">
              <img src={chickenGravyPowder} alt="Chicken Gravy Powder" />
            </div>
            <h3>Chicken Gravy Powder</h3>
            <p>
              Rich blend for delicious chicken gravies.
            </p>
          </div>

          <div className="product-block">
            <div className="product-image">
              <img src={chicken65Powder} alt="Chicken 65 Powder" />
            </div>
            <h3>Chicken 65 Powder</h3>
            <p>
              Crispy, spicy masala mix for Chicken 65.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
