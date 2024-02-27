/*import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";




import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

const Map = () => {
  const mapContainerRef = useRef(null);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pothole-detection-e02da-default-rtdb.asia-southeast1.firebasedatabase.app/detection.json"
        );
        const data = await response.json();
        setRows(Object.values(data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!mapboxgl.supported()) {
      alert("Your browser does not support Mapbox GL");
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.7351462, 18.5849503],
      zoom: 10,
    });

    map.on("load", function () {
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);

          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: rows.map((row) => ({
                type: "Feature",
                properties: {
                  title: `Severity: ${row.servirity}`,
                },
                geometry: {
                  type: "Point",
                  coordinates: [row.longitude, row.latitude],
                },
              })),
            },
          });

          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => map.remove();
  }, [rows]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;



import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";
import geoJson from "./chicago-parks.json"

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

const Map = () => {
  const mapContainerRef = useRef(null);
  //const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pothole-detection-e02da-default-rtdb.asia-southeast1.firebasedatabase.app/detection.json"
        );
        const data = await response.json();
        // Check if data is an object and convert it to an array of values
        if (data && typeof data === "object") {
          setRows(Object.values(data));
        } else {
          setRows([]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setRows([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!mapboxgl.supported()) {
      alert("Your browser does not support Mapbox GL");
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.7351462, 18.5849503],
      zoom: 10,
    });

    map.on("load", function () {
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);

          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJson.map((row) => ({
                type: "Feature",
                properties: {
                  title: `Severity: ${row.servirity}`,
                },
                geometry: {
                  type: "Point",
                  coordinates: [row.longitude, row.latitude],
                },
              })),
            },
          });

          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => map.remove();
  }, [rows]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;

// "type": "FeatureCollection"

/*
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

const Map = () => {
  const mapContainerRef = useRef(null);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pothole-detection-e02da-default-rtdb.asia-southeast1.firebasedatabase.app/detection.json"
        );
        const data = await response.json();
        console.log(data);
        if (data && typeof data === "object") {
          setRows(Object.values(data));
        } else {
          setRows([]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setRows([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!mapboxgl.supported()) {
      alert("Your browser does not support Mapbox GL");
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.7351462, 18.5849503],
      zoom: 10,
    });
console.log(rows.length);
    map.on("load", function () {
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);

          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: rows.map((row, index) => ({
                type: "Feature",
                properties: {
                  title: `Severity: ${row.servirity}`,
                },
                geometry: {
                  type: "Point",
                  coordinates: [parseFloat(row.longitude), parseFloat(row.latitude)],
                },
                id: index.toString(), // Unique ID for each feature
              })),
            },
          });

          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => map.remove();
  }, [rows]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;


import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";
import geoJson from "./chicago-parks.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

 
const Map = () => {

  
  const mapContainerRef = useRef(null);
 
console.log(geoJson);
  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.7351462, 18.5849503],

      
      zoom: 10,
    });

    map.on("load", function () {
      // Add an image to use as a custom marker
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
       //"https://ibb.co/cLhsRMK",
        //"https://drive.google.com/file/d/13Oc7oy43YYJituBjTZU_VV6vxYBF0wSY/view?usp=sharing",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features:geoJson.features,
            },
          });
          // Add a symbol layer
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;


import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

const Map = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pothole-fd03e-default-rtdb.firebaseio.com/features.json"
        );
        const data = await response.json();
        console.log(data);
        setGeoJsonData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!mapboxgl.supported()) {
      alert("Your browser does not support Mapbox GL");
      return;
    }

    if (!geoJsonData) {
      return;
    }

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-73.935242, 40.73061], // New York City coordinates
      zoom: 10,
    });

    map.on("load", function () {
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);

          map.addSource("points", {
            type: "geojson",
            data: geoJsonData,
          });

          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => map.remove();
  }, [geoJsonData]);

  return <div id="map" className="map-container" />;
};

*/
import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

const Map = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
         // "https://pothole-fd03e-default-rtdb.firebaseio.com/features.json"
          "https://pothole-fd03e-default-rtdb.firebaseio.com/map/0.json"
        );
        const data = await response.json();
        console.log(data);
        setGeoJsonData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!mapboxgl.supported()) {
      alert("Your browser does not support Mapbox GL");
      return;
    }

    if (!geoJsonData) {
      return;
    }

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.7351462, 18.5849503],// New York City coordinates
      zoom: 10,
    });

    map.on("load", function () {
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);

          map.addSource("points", {
            type: "geojson",
            data: geoJsonData,
          });

          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => map.remove();
  }, [geoJsonData]);

  return <div id="map" className="map-container" />;
};

export default Map;
