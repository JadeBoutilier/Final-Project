import { GoogleMap, MarkerF, DirectionsRenderer} from "@react-google-maps/api";
import { useContext } from "react";
import styled from "styled-components";
import { GoogleMapsContext } from "./GoogleMapsContext";


const GoogleMaps = () => {


  const {setMap, center, isLoaded, directionsResponse} =useContext(GoogleMapsContext)

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <Map>
      <GoogleMap 
        center={center}
        zoom={15}
        mapContainerStyle={{height: "300px", width: "800px"}}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: true,
          streetViewControl: false,
        }}
        onLoad={map => setMap(map)}
      >
        <MarkerF position={center}/>
        {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}

        {/* WILL NEED TO GENERATE MARKER POSITIONS */}
      </GoogleMap>
    </Map>
  );
};
const Map = styled.div`
  margin-left: 40px;
`;
export default GoogleMaps;
