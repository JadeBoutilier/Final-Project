import { GoogleMap, MarkerF, DirectionsRenderer, useJsApiLoader} from "@react-google-maps/api";
import { useContext, useState} from "react";
import styled from "styled-components";
import { DesignersContext, DesignersProvider } from "./DesignersContext";
import { GoogleMapsContext } from "./GoogleMapsContext";


const GoogleMaps = ({lat, lng}) => {
  // const { designers} =useContext(DesignersContext)


  const [libraries]= useState(['places'])
  const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: window.__RUNTIME_CONFIG__.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
    });
  
  const [map, setMap] =useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance]=useState("")
  const [duration, setDuration]=useState("")






  //  const designerLatt= designers.map((info)=> {
  //   return parseFloat(info.latt)
  // })
  // const designerLongt= designers.map((info)=> {
  //   return parseFloat(info.longt)
  // })



  const Location = { lat: parseFloat(lat), lng: parseFloat(lng)};
  // console.log("hihihihihihi", lat, lng)
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <Map>
      <GoogleMap 
        center={Location}
        zoom={15}
        mapContainerStyle={{height: "70vh", width: "100vw"}}
        panTo={Location}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: true,
          streetViewControl: false,
        }}
        onLoad={map => setMap(map)}
      >

        <MarkerF position={Location}/>
        {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}

        {/* WILL NEED TO GENERATE MARKER POSITIONS */}
      </GoogleMap>
    </Map>
  );
};
const Map = styled.div`
`;
export default GoogleMaps;
