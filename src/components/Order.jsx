import "./Order.css";

export default function Order() {
  return (
    <section className="order">
      <div className="order-inner">
        <h2 className="order-title">
          How to order
        </h2>

        <p className="order-text">
          We currently take orders directly to keep things simple
          and avoid overproduction.
        </p>

        <div className="order-actions">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="order-btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order via WhatsApp
          </a>

          <a href="tel:+91XXXXXXXXXX" className="order-btn">
            Call us
          </a>
        </div>

        <p className="order-note">
          Available locally. Prepared in limited quantities.
        </p>
      </div>
    </section>
  );
}
