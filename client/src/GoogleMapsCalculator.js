import {Autocomplete} from "@react-google-maps/api";
import { useContext, useRef } from "react";

import styled from "styled-components";
import { GoogleMapsContext } from "./GoogleMapsContext";

const GoogleMapCalculator = () => {

const {map, setMap, center, isLoaded, directionsResponse, setDirectionsResponse, distance, setDistance, duration, setDuration} =useContext(GoogleMapsContext)

const originRef = useRef()
const destinationRef = useRef()

const calculateRoute = async () => {
if(originRef.current.value ==="" || destinationRef.current.value === ""){
  return
}
// eslint-disable-next-line no-undef
const directionService = new google.maps.DirectionsService()
const results = await directionService.route({
  origin: originRef.current.value,
  destination: destinationRef.current.value,
  // eslint-disable-next-line no-undef
  travelMode: google.maps.TravelMode.DRIVING
})
setDirectionsResponse(results)
setDistance(results.routes[0].legs[0].distance.text)
setDuration(results.routes[0].legs[0].duration.text)
}


const resetRoute = () => {
  setDirectionsResponse(null)
  setDistance("")
  setDuration("")
  originRef.current.value = ""
  setDuration.current.value=""
}

if (!isLoaded) {
    return <div>Loading...</div>;
  }
    return ( 
        <Box>
            <Inputs>
            <Autocomplete>
            <Input type="text" placeholder="origin" ref={originRef}/>
            </Autocomplete>
            <Autocomplete>
            <Input type="text" placeholder="destination" ref={destinationRef}/>
            </Autocomplete>
            <CalcButton type="submit" onClick={calculateRoute}>Calc</CalcButton>
            <Button onClick={resetRoute}>Recenter</Button>
            </Inputs>
            <Results>
            <Result>Distance: {distance}</Result>
            <Result>Duration: {duration}</Result>
            {/* PAN TO SET TO MONTREAL  */}
            <Button type="submit" onClick={()=> map.panTo(center)}>Reset</Button>
            </Results>

        </Box>
     );
}
 
const Box=styled.div`
display:flex;
flex-direction: column;
padding: 20px;
border: solid 1px black;
width: 100%;
`
const Inputs=styled.div`
display: flex;
justify-content: space-between;
`
const Results=styled.div`
display: flex;
justify-content: space-between;
`
const Result=styled.div`
display:flex;
`
const CalcButton =styled.button`
font-size: 1rem;
height: 23px;
padding: 0;
color: black;
`
const Button=styled.button`
font-size: 1rem;
height: 23px;
padding: 0;
color: black;
`
const Input=styled.input`
width:200px;
`
export default GoogleMapCalculator;