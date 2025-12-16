import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        <h2>Why Choose Us</h2>

        <div className="reasons">
          <div className="reason">
            <h3>Fresh Stock Every Day</h3>
            <p>
              Vegetables and essentials are sourced regularly to ensure
              freshness — not stored for weeks.
            </p>
          </div>

          <div className="reason">
            <h3>Honest Pricing</h3>
            <p>
              Fair prices without hidden margins or unnecessary markups.
              What you see is what you pay.
            </p>
          </div>

          <div className="reason">
            <h3>Local & Reliable</h3>
            <p>
              A neighborhood store that understands local needs and
              maintains consistent quality.
            </p>
          </div>

          <div className="reason">
            <h3>Personal Service</h3>
            <p>
              We know our customers. You’re not just a bill number here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
