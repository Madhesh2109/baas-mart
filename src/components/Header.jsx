import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${visible ? "show" : ""}`}>
      <div className="header-inner">
        <div className="logo">BAASS</div>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="header-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
