import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
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
    </footer>
  );
}
