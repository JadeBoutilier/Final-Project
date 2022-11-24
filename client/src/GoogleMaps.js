import { useJsApiLoader, GoogleMap, MarkerF} from "@react-google-maps/api";
import { useContext } from "react";
import styled from "styled-components";
import { GoogleMapsContext } from "./GoogleMapsContext";


const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: window._RUNTIME_CONFIG__.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const {map, setMap, center} =useContext(GoogleMapsContext)

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <Map>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100vh", height: "100vh" }}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: true,
          streetViewControl: true,
        }}
        onLoad={map => setMap(map)}
      >
        <MarkerF position={center}/>

        {/* WILL NEED TO GENERATE MARKER POSITIONS - NEED TO FIGURE OUT WHY THEY DISAPPEAR*/}
      </GoogleMap>
    </Map>
  );
};
const Map = styled.div`
  width: 90%;
  height: 90%;
  margin-left: 40px;
`;
export default GoogleMaps;
