import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

const Maps = () => {
  const [userLocation, setUserLocation] = useState(null);
  const coffeeShopLocation = [17.72839488842437, 83.30634742272619];

  useEffect(() => {
    const map = L.map("map").setView(coffeeShopLocation, 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coffeeShopLocation).addTo(map)
      .bindPopup("Bean Vantage - Our Coffee Shop")
      .openPopup();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = [position.coords.latitude, position.coords.longitude];
          setUserLocation(userCoords);

          L.marker(userCoords, {
            icon: L.icon({
              iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-orange.png",
              iconSize: [30, 40],
            }),
          })
            .addTo(map)
            .bindPopup("You are here")
            .openPopup();

          L.Routing.control({
            waypoints: [L.latLng(userCoords), L.latLng(coffeeShopLocation)],
            routeWhileDragging: true,
          }).addTo(map);
        },
        () => {
          console.log("User denied location access.");
        }
      );
    }

    return () => {
      map.remove();
    };
  }, []);

  // Structured Data for Location
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Bean Vantage",
    "description": "Find Bean Vantage, the best coffee shop near you. Visit us for freshly brewed coffee, artisanal espresso, and a cozy meeting place.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 9, Sector 1, MVP Colony",
      "addressLocality": "Visakhapatnam",
      "postalCode": "530017",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.72839488842437",
      "longitude": "83.30634742272619"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <div className="relative">
      <Helmet>
        <meta property="og:title" content="Find Bean Vantage on the Map" />
        <meta property="og:description" content="Use our interactive map to locate the nearest Bean Vantage café and get directions instantly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beanvantage.com/location" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div
        id="map"
        style={{ height: "700px", width: "100%" }}
        className="z-0 py-6"
        aria-label="Interactive map showing the location of Bean Vantage and your current location"
      ></div>
    </div>
  );
};

export default Maps;