import { createContext, useState } from "react";


export const GoogleMapsContext = createContext()

export const GoogleMapsProvider = ({children}) => {
    const [map, setMap] =useState(/** @type google.maps.Map */ (null))

    const center = { lat: 45.5019, lng: -73.5674};

    return ( 
        <GoogleMapsContext.Provider value={{map, setMap, center}}>
            {children}
        </GoogleMapsContext.Provider>
     );
}
 