import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner footer-grid">

        {/* Left content */}
        <div className="footer-content">
          <p className="footer-line">
            BAASS Homemade Products
          </p>

          <p className="footer-sub">
            Prepared in small batches. Made at home.
          </p>

          <p className="footer-copy">
            © {new Date().getFullYear()} BAASS Homemade Products
          </p>
        </div>

        {/* Right map */}
        <div className="footer-map">
          <iframe
            title="BAASS Homemade Products Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.57338989872227!2d77.73739996708679!3d8.724014628192778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411003b0905bb%3A0x9ddb748e4bdb3034!2sBAASS%20MART!5e0!3m2!1sen!2sin!4v1768068866932!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </footer>
  );
}