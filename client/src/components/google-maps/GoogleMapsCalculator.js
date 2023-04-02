import {Autocomplete} from "@react-google-maps/api";
import { useContext, useRef } from "react";

import styled, { keyframes } from "styled-components";
import * as FontAwesome from "react-icons/fa";
import { GoogleMapsContext } from "../../contexts/GoogleMapsContext";

const GoogleMapCalculator = () => {

const {center, setMap, isLoaded, setDirectionsResponse, distance, setDistance, duration, setDuration} =useContext(GoogleMapsContext)

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
  setMap(center)
}

if (!isLoaded) {
    return <Spinner>
    <FontAwesome.FaSpinner />
  </Spinner>;
  }
    return ( 
        <Box>
          <Container1 id="container1">
            <Autocomplete>
            <Input id="input" type="text" placeholder="Origin" ref={originRef}/>
            </Autocomplete>
            <Result>Distance: {distance}</Result>
            </Container1>
            <Container2>
            <Autocomplete>
            <Input id="input" type="text" placeholder="Destination" ref={destinationRef}/>
            </Autocomplete>
            <Result>Duration (driving): {duration}</Result>
            </Container2>
            <Container3>
            <CalcButton type="submit" onClick={calculateRoute}>Calculate Route</CalcButton>
            <ResetButton onClick={resetRoute}>Reset Route</ResetButton>
            </Container3>
            {/* PAN TO SET TO MONTREAL  */}
            {/* <Button type="submit" onClick={()=> map.panTo(center)}>Recenter Map</Button> */}
        </Box>
     );
}
 
const Box=styled.div`
display:flex;
padding: 20px;
width: 100%;
`
const Container1 = styled.div`
display: flex;
flex-direction: column;
`
const Container2=styled.div`
display: flex;
flex-direction: column;
`
const Container3=styled.div`
display: flex;
margin-top: 5px;
flex-direction: column;
`
const Result=styled.div`
display:flex;
width: 30vw;
margin-left: 10px;
`
const CalcButton =styled.button`
   cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0 0 1px 0px;
  margin-left: 20px;
  line-height: 1;
  color: var(--color-darkGrey);
  margin-bottom: 17px;
  text-align: end;
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    padding: 0 

  }
`
const ResetButton=styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0 0 1px 0px;
  line-height: 1;
  margin-left: 20px;
  color: var(--color-darkGrey);
  width: fit-content;
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    padding: 0;

  }
`
const Input=styled.input`
width: 30vw;
  height: 1.5rem;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  padding-left: 10px;
  background-color: var(--color-lightGrey);
  color: var(--color-darkGrey);
  margin-right: 10px;
  margin-bottom: 15px;

  &:focus {
    outline: none !important;
  }
`
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
export default GoogleMapCalculator;