import { GoogleMap, MarkerF, DirectionsRenderer} from "@react-google-maps/api";
import { useContext} from "react";
import styled from "styled-components";
import { GoogleMapsContext } from "./GoogleMapsContext";
import { DesignersContext } from "./DesignersContext";


const GoogleMaps = () => {

  const {setMap, center, isLoaded, directionsResponse} =useContext(GoogleMapsContext)
  const {designers} =useContext(DesignersContext)


  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <Map>
      <GoogleMap 
        center={center}
        zoom={15}
        mapContainerStyle={{height: "70vh", width: "100vw"}}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: true,
          streetViewControl: false,
        }}
        onLoad={map => setMap(map)}
      >
        {designers.map((designer)=> {
          const position= {lat: parseFloat(designer.latt), lng: parseFloat(designer.longt)}
          console.log(designer)
          return (<>
          <MarkerF position={position}/>
          {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
          </>
          )
        })}
   

        {/* WILL NEED TO GENERATE MARKER POSITIONS */}
      </GoogleMap>
    </Map>
  );
};
const Map = styled.div`
`;
export default GoogleMaps;
