import { useEffect, useState } from "react";
import "./Header.css";

const sections = [
  { id: "opening", label: "Home" },
  { id: "origin", label: "Origin" },
  { id: "process", label: "Process" },
  { id: "principles", label: "Principles" },
  { id: "products", label: "Products" },
  { id: "order", label: "Order" },
];

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("opening");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + window.innerHeight / 2;

      // Show header after Opening
      setVisible(scrollY > window.innerHeight * 0.6);

      // Theme switch after Origin
      const origin = document.getElementById("origin");
      if (origin) {
        setDark(scrollY >= origin.offsetTop - 80);
      }

      // Active section detection
      for (const s of sections) {
        const section = document.getElementById(s.id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          viewportCenter >= top &&
          viewportCenter < top + height
        ) {
          setActive(s.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header ${visible ? "show" : ""} ${
        dark ? "dark" : "light"
      }`}
    >
      <div className="header-inner">
        <div className="logo">BAASS</div>

        <nav className="nav">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-link ${
                active === s.id ? "active" : ""
              } ${s.id === "order" ? "nav-cta" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(s.id);
                if (target) {
                  target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
