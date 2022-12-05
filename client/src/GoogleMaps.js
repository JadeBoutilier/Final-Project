import {GoogleMap, MarkerF, DirectionsRenderer, useJsApiLoader} from "@react-google-maps/api";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import * as FontAwesome from "react-icons/fa";

import mapStyle from "./MapStyle";

const GoogleMaps = ({ lat, lng }) => {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: window.__RUNTIME_CONFIG__.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const Location = { lat: parseFloat(lat), lng: parseFloat(lng) };
  if (!isLoaded) {
    return (
      <Spinner>
        <FontAwesome.FaSpinner />
      </Spinner>
    );
  }
  return (
    <Map>
      <GoogleMap
        center={Location}
        zoom={15}
        mapContainerStyle={{ height: "70vh", width: "100vw" }}
        panTo={Location}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: true,
          streetViewControl: false,
          styles: mapStyle,
        }}
        onLoad={(map) => setMap(map)}
      >
        <MarkerF position={Location} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </Map>
  );
};
const Map = styled.div``;
const Spin = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(360deg);}
`;

const Spinner = styled.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Spin} 1s infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
`;
export default GoogleMaps;
