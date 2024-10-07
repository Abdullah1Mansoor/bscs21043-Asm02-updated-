// Map.js
import './Map.css';

const Map = () => {
  return (
    <div className="card map-card">
      <h3>Real-Time Location Map</h3>
      <div className="map-container">
        {/* Replace with your actual map implementation */}
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094697!2d144.95373531590445!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11d373%3A0x5045675218cee00!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1621355150780!5m2!1sen!2sau"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Map;
