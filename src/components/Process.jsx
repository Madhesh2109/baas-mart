import "./Process.css";

export default function Process() {
  return (
    <section className="process">
      <div className="process-inner">
        <h2 className="process-title">
          How we prepare our masalas
        </h2>

        <div className="process-step">
          <h3>We start with whole spices</h3>
          <p>
            Spices are sourced whole, not pre-ground.
            This keeps the aroma intact and avoids stale flavors.
          </p>
        </div>

        <div className="process-step">
          <h3>They are dried and ground in small batches</h3>
          <p>
            Grinding is done in limited quantities.
            Nothing is stored for long periods.
          </p>
        </div>

        <div className="process-step">
          <h3>Packed and sold directly</h3>
          <p>
            Once prepared, the masalas are packed and supplied
            without long warehouse storage.
          </p>
        </div>
      </div>
    </section>
  );
}
