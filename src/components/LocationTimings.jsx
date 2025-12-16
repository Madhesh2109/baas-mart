import "./LocationTimings.css";

const LocationTimings = () => {
  return (
    <section className="location" id="location">
      <div className="location-container">
        <h2>Store Location & Timings</h2>

        <div className="location-grid">
          <div className="location-info">
            <h3>Baas Mart</h3>

            <p>
              47, W Car St, <br/>
              Palayamkottai, <br/>
              Tirunelveli, Tamil Nadu 627002
            </p>

            <p className="timings">
              <strong>Timings:</strong><br />
              Monday – Sunday<br />
              7:30 AM – 10:30 PM
            </p>

            <div className="location-actions">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="map">
            <iframe
                title="BAASS Mart Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.4785456401341!2d77.73749847640794!3d8.724108698699343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411003b0905bb%3A0x9ddb748e4bdb3034!2sBAASS%20MART!5e0!3m2!1sen!2sin!4v1765875653572!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationTimings;
