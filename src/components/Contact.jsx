import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact / How to Order</h2>

        <p className="contact-intro">
          For orders and enquiries, please contact us directly. Orders are
          prepared based on availability.
        </p>

        <div className="contact-grid">
          <div className="contact-box">
            <h3>Order via WhatsApp</h3>
            <p>
              Send us a message with the product name and quantity. We will
              confirm availability and share the next steps.
            </p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="contact-box">
            <h3>Call Us</h3>
            <p>
              You can call us for product details and order enquiries during
              working hours.
            </p>
            <a href="tel:+919999999999" className="btn secondary">
              Call Now
            </a>
          </div>
        </div>

        <div className="pickup-section">
          <h3>Location</h3>
          <p>
            This location is provided for reference and pickup after order
            confirmation. Please contact us before visiting.
          </p>

          <div className="map">
            <iframe
              title="BAASS Homemade Products Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.4785456401341!2d77.73749847640794!3d8.724108698699343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411003b0905bb%3A0x9ddb748e4bdb3034!2sBAASS%20MART!5e0!3m2!1sen!2sin!4v1765875653572!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <p className="contact-note">
          <strong>Note:</strong> Products are prepared in limited quantities.
          Availability may vary.
        </p>
      </div>
    </section>
  );
};

export default Contact;

