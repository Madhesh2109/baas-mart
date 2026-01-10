import "./Process.css";

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process-inner">
        <h2 className="process-title">How we prepare our masalas</h2>

        <div className="process-grid">
          <div className="process-card">
            <img
              src="/images/process-whole-spices.png"
              alt="Whole spices preparation"
            />
            <h3>We start with whole spices</h3>
            <p>
              Spices are sourced whole, not pre-ground. This keeps the aroma
              intact and avoids stale flavors.
            </p>
          </div>

          <div className="process-card">
            <img
              src="/images/process-grinding.png"
              alt="Small batch grinding"
            />
            <h3>Dried & ground in small batches</h3>
            <p>
              Grinding is done in limited quantities so freshness is never
              compromised.
            </p>
          </div>

          <div className="process-card">
            <img
              src="/images/process-packing.png"
              alt="Direct packing"
            />
            <h3>Packed and sold directly</h3>
            <p>
              Once prepared, masalas are packed and supplied without long
              warehouse storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
