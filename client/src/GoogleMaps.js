import {useJsApiLoader, GoogleMap} from '@react-google-maps/api'
import styled from 'styled-components'
console.log(window._RUNTIME_CONFIG__)

const GoogleMaps = () => {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: window._RUNTIME_CONFIG__.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const center = {lat:45.5240, lng:73.6005}
    
    if (!isLoaded){
        return <div>Loading...</div>
    }
    return ( 
        <Map>
        <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100vh', height: '100vh'}}>

        </GoogleMap>
        </Map>
     );
}
const Map = styled.div`
width: 90%;
height: 90%;
margin-left: 40px;
`
export default GoogleMaps;