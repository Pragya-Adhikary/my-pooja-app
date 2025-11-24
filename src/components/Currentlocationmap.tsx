import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../services/App.css"; // for styling

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const CurrentLocationMap: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // replace with your API key
  });

  useEffect(() => {
    // Check if location already stored
    const storedLat = localStorage.getItem("lat");
    const storedLng = localStorage.getItem("lng");
    const storedLocation = localStorage.getItem("detectedLocation");

    if (storedLat && storedLng && storedLocation) {
      setCurrentPosition({ lat: Number(storedLat), lng: Number(storedLng) });
      return; // Don't ask for geolocation again
    }

    // Ask for geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setCurrentPosition(coords);
          localStorage.setItem("lat", String(coords.lat));
          localStorage.setItem("lng", String(coords.lng));

          // Optional: reverse geocoding for readable location
          // For now, just store placeholder
          localStorage.setItem("detectedLocation", `Lat: ${coords.lat}, Lng: ${coords.lng}`);
        },
        () => {
          setError("Please allow location access to continue.");
        }
      );
    } else {
      setError("Your browser does not support location.");
    }
  }, []);

  const handleContinue = () => {
    navigate("/home");
  };

  if (!isLoaded || !currentPosition) {
    return (
      <div className="location-loader">
        <div className="loader"></div>
        <h2>📍 Getting your location…</h2>
        <p>Please allow location access.</p>
        {error && <p className="error-text">{error}</p>}
      </div>
    );
  }

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <GoogleMap mapContainerStyle={containerStyle} center={currentPosition} zoom={16}>
        <Marker position={currentPosition} />
      </GoogleMap>
      <button className="continue-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default CurrentLocationMap;
