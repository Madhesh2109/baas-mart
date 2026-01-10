import { useEffect } from "react";
import "./Order.css";

export default function Order() {
  useEffect(() => {
    const section = document.querySelector(".order");

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle("show", entry.isIntersecting);
      },
      { threshold: 0.45 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="order" className="order">
      {/* Anime-inspired character */}
      <div className="order-character" aria-hidden="true">
        <img
          src="/images/order-character.png"
          alt=""
        />
      </div>

      <div className="order-inner">
        <h2 className="order-title">How to order</h2>

        <p className="order-handwrite">
          Just message us. We’ll take care of the rest.
        </p>

        <p className="order-text">
          We currently take orders directly to keep things simple
          and avoid overproduction.
        </p>

        <div className="order-actions">
          <a
            href="https://wa.me/9184283 33607"
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
