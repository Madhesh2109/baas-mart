import "./Principles.css";

export default function Principles() {
  return (
    <section id="principles" className="principles">
      <div className="principles-inner principles-grid">
        
        {/* Anime visual */}
        <div className="principles-visual">
          <img
            src="/images/principles-chef.png"
            alt="BAASS Masala chef principles"
          />
        </div>

        {/* Content */}
        <div className="principles-content">
          <h2 className="principles-title">What we don’t do</h2>

          <ul className="principles-list">
            <li>No preservatives or additives</li>
            <li>No bulk grinding for long-term storage</li>
            <li>No artificial colors or enhancers</li>
            <li>No mass production</li>
          </ul>

          <p className="principles-note">
            These choices limit how much we can make —
            and we’re okay with that.
          </p>
        </div>

      </div>
    </section>
  );
}
