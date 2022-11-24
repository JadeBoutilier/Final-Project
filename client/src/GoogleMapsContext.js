import { createContext, useState } from "react";
import { useJsApiLoader} from "@react-google-maps/api";



export const GoogleMapsContext = createContext()



export const GoogleMapsProvider = ({children}) => {

    const [libraries]= useState(['places'])
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: window._RUNTIME_CONFIG__.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      });
    
    const [map, setMap] =useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance]=useState("")
    const []

    const center = { lat: 45.5019, lng: -73.5674};

    return ( 
        <GoogleMapsContext.Provider value={{map, setMap, center, isLoaded}}>
            {children}
        </GoogleMapsContext.Provider>
     );
}
 