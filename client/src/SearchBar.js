import styled from "styled-components";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState("");

    // const handleSelect = () => {

    // }

    return ( 
        <Wrapper>
            <Input 
            type="text" 
            value={value}
            onChange={ e => setValue(e.target.value)}
            placeholder="Search by brand or city"
            // onKeyDown={(e) => {
            //     if (e.key === "Enter"){
            //         handleSelect(e.target.value)
            //     }
            // }
            // }
            ></Input>
        </Wrapper>
     );
}
 
const Wrapper = styled.div`
height: 30px;
position: relative;
`
const Input = styled.input`
width: 40vw;
height: 2rem;
border: none;
`

export default SearchBar;