/*import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
*/
//----------------------original code ------------------------------------------
/*
import './fqa.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 
 'pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg';

export default function MAP() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(73.7351462);
const [lat, setLat] = useState(18.5849503);
const [zoom, setZoom] = useState(9);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng,lat],
      zoom: zoom
    });
  });

  map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });

  
/*
  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  }); 
  
 
  */
 /*
  return (
    <div>

<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
      <div ref={mapContainer} className="map-container" />
       
    </div>
  );


  
}; 

*/



//-------------------------------------------------end ----------------------------

/*

import React, { PureComponent } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-map-gl';
//import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row, Button } from 'reactstrap';

const mapStyle = {
    width: '100%',
    height: 600
}

const mapboxApiKey = 'pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg';


const params = {
    country: "india"
}

const CustomMarker = ({index, marker}) => {
  return (
    <Marker
      longitude={marker.longitude}
      latitude={marker.latitude}>
      <div className="marker">
        <span><b>{index + 1}</b></span>
      </div>
    </Marker>
  )
};


class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 45.50884,
        longitude: -73.58781,
        zoom: 15
      },
      tempMarker: null,
      markers:[]
    };

  }

  onSelected = (viewport, item) => {
      this.setState({
        viewport,
        tempMarker: {
          name: item.place_name,
          longitude: item.center[0],
          latitude: item.center[1]
        }
      })
  }

  add = () => {
    var { tempMarker } = this.state

    this.setState(prevState => ({
        markers: [...prevState.markers, tempMarker],
        tempMarker: null
    }))
  }

  render() {
    const { viewport, tempMarker, markers } = this.state;
    return(
      <Container fluid={true}>
        <Row>
          <Col><h2>Mapbox Tutorial</h2></Col>
        </Row>
        <Row className="py-4">
          <Col xs={2}>
            <Geocoder
                mapboxApiAccessToken={mapboxApiKey}
                onSelected={this.onSelected}
                viewport={viewport}
                hideOnSelect={true}
                value=""
                queryParams={params}
            />
          </Col>
          <Col>
           <Button color="primary" onClick={this.add}>Add</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({viewport})}
            >
              { tempMarker &&
                <Marker
                  longitude={tempMarker.longitude}
                  latitude={tempMarker.latitude}>
                  <div className="marker temporary-marker"><span></span></div>
                </Marker>
              }
              {
                this.state.markers.map((marker, index) => {
                  return(
                    <CustomMarker
                      key={`marker-${index}`}
                      index={index}
                      marker={marker}
                    />
                  )
                })
              }
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
   );
  }
}

export default App;
*/
/*

import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGl from 'react-map-gl';
import{useState} from "react";
const T= process.env.TOKEN
// const st= sk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNsc29ibW42ODBjYmcyamx6cjFoZjg0cWYifQ.EespT_UlhjVWb7BO0c6lDw
//const Token='pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNsc2U2OWt5ZjB6aTIyaG5vYW1kcmg0dnIifQ.tqaLqemmOykGIKu9eft38g';
export default function Map(){

  const [view,setView]=useState({
    latitude:73.7351462,
    longitude: 18.5849503,
    zoom:6
  })

  return(

    <div className="map-container">

      <ReactMapGl  {...view}
      mapboxApiAccessToken={T}
      width="90%"
      height="100%"
      mapStyle='mapbox://styles/mapbox/streets-v12'


  >
   

      </ReactMapGl>
    </div>
  )
}
*/
/*

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg';;
 
export default function App() {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(73.7351462);
const [lat, setLat] = useState(18.5849503);
const [zoom, setZoom] = useState(9);
 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v12',
center: [lng, lat],
zoom: zoom
});
 
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});
});
 
return (
<div>
<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={mapContainer} className="map-container" />
</div>
);
}*/
/*
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";
import geoJson from "./chicago-parks.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

const Map = () => {
  const mapContainerRef = useRef(null);


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
              features: geoJson.features,
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


import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";
import geoJson from "./chicago-parks.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

const Map = () => {
  const mapContainerRef = useRef(null);
  /*const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dashboard-7f7bc-default-rtdb.firebaseio.com/features.json"
        );
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  


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
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJson.pothole,
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


import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";
//import geoJson from "./chicago-parks.json";

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
        setRows(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  


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
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJson.detection,
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


import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";
import geoJson from "./pot.json";

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
        // Assuming data is an object with keys as IDs, convert it to an array of objects
        const dataArray = Object.keys(data).map(key => data[key]);
        setRows(dataArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  
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
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJson.detect,
            },
          });
          // Add a symbol layer
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

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;



import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";
import geoJson from "./pot.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [72.8856, 19.0748],
      zoom: 10,
    });

    map.on("load", function () {
      // Add an image to use as a custom marker
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJson.detect.map((location) => ({
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [location.longitude, location.latitude],
                },
                properties: {
                  title: `Severity: ${location.servirity}`,
                },
              })),
            },
          });
          // Add a symbol layer
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

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;




import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./fqa.css";
import geoJson from "./pot.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWsxMzUwIiwiYSI6ImNscW5tYW54ajBoczkyaW13aWgyZ3EyYTAifQ.sWlPHR-eoMFm5EBzkXp9Wg";

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [72.8856, 19.0748],
      zoom: 10,
    });

    mapRef.current = map;

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    map.on("load", function () {
      // Add an image to use as a custom marker
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);

          // Add a GeoJSON source with all points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJson.detect.map((location, index) => ({
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [location.longitude, location.latitude],
                },
                properties: {
                  title: `Severity: ${location.servirity}`,
                },
                id: index.toString(),
              })),
            },
          });

          // Add a symbol layer for all points
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
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
*/
