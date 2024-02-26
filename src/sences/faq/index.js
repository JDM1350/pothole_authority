/*import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


*/

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

