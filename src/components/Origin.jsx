import { useEffect } from "react";
import "./Origin.css";

export default function Origin() {
  useEffect(() => {
    const section = document.querySelector(".origin");

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle("show-frame", entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="origin" className="origin">
      <div className="origin-inner">
        <h2 className="origin-title">It didn’t start as a business.</h2>

        <p className="origin-text">
          We started making masalas at home for our own cooking.
          Friends and relatives asked for it. Then neighbors.
          Eventually, it became something people kept coming back for.
        </p>

        <p className="origin-text">
          That’s when we decided to prepare it properly —
          without scaling it into something it’s not.
        </p>
      </div>
    </section>
  );
}
