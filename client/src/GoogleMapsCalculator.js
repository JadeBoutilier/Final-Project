import {Autocomplete} from "@react-google-maps/api";
import { useContext } from "react";

import styled from "styled-components";
import { GoogleMapsContext } from "./GoogleMapsContext";

const GoogleMapCalculator = () => {

const {map, setMap, center, isLoaded} =useContext(GoogleMapsContext)

if (!isLoaded) {
    return <div>Loading...</div>;
  }
    return ( 
        <Box>
            <Inputs>
            <Autocomplete>
            <input type="text" placeholder="origin"/>
            </Autocomplete>
            <Autocomplete>
            <input type="text" placeholder="destination"/>
            </Autocomplete>
            <button type="submit">Calc</button>
            <button type="reset">X</button>
            </Inputs>
            <Results>
            <Result>Distance</Result>
            <Result>Duration</Result>
            {/* PAN TO SET TO MONTREAL  */}
            <button type="submit" onClick={()=> map.panTo(center)}>*</button>
            </Results>

        </Box>
     );
}
 
const Box=styled.div`
display:flex;
flex-direction: column;
padding: 20px;
border: solid 1px black;
width: 30%;
`
const Inputs=styled.div`
display: flex;
`
const Results=styled.div`
display: flex;
justify-content: space-between;
`
const Result=styled.div`
display:flex;
`
export default GoogleMapCalculator;