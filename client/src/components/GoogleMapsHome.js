import {
  GoogleMap,
  MarkerF,
  DirectionsRenderer,
  InfoWindow,
} from "@react-google-maps/api";
import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import * as FontAwesome from "react-icons/fa";
import { GoogleMapsContext } from "../contexts/GoogleMapsContext";
import { DesignersContext } from "../contexts/DesignersContext";
import mapStyle from "./google-maps/MapStyle";
import { useNavigate } from "react-router-dom";

const GoogleMaps = () => {
  const { setMap, center, isLoaded, directionsResponse } =
    useContext(GoogleMapsContext);
  const { designers } = useContext(DesignersContext);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const navigate = useNavigate();

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
        center={center}
        zoom={15}
        mapContainerStyle={{ height: "60vh", width: "100vw" }}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: true,
          streetViewControl: false,
          styles: mapStyle,
        }}
        onLoad={(map) => setMap(map)}
      >
        {designers.map((designer) => {
          const position = {
            lat: parseFloat(designer.latt),
            lng: parseFloat(designer.longt),
          };
          // console.log(designer)
          return (
            <>
              <MarkerF
                position={position}
                onClick={() => {
                  setSelectedMarker(designer);
                }}
              />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </>
          );
        })}
        {selectedMarker && (
          <InfoWindow
            position={{
              lat: parseFloat(selectedMarker.latt),
              lng: parseFloat(selectedMarker.longt),
            }}
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
          >
            <>
              <Header
                onClick={() => {
                  navigate(`/designer/${selectedMarker._id}`);
                }}
              >
                {selectedMarker.brand}
              </Header>
              <div>{selectedMarker.tagLine}</div>
              <Address>{selectedMarker.address}</Address>
            </>
          </InfoWindow>
        )}

        {/* WILL NEED TO GENERATE MARKER POSITIONS */}
      </GoogleMap>
    </Map>
  );
};
const Map = styled.div`
  font-family: var(--font);
`;
const Header = styled.button`
  font-weight: bold;
  text-align: center;
  color: var(--color-dark-grey);
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0 0 1px 0px;
  width: fit-content;
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    padding: 0;
  }
`;
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

const Address = styled.div`
  font-style: italic;
`;
export default GoogleMaps;
