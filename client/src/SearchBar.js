import styled from "styled-components";
import { useState } from "react";
import { VscSearch } from "react-icons/vsc";

const SearchBar = () => {
    const [value, setValue] = useState("");

    // const handleSelect = () => {

    // }

    return ( 
        <Wrapper>
            <Button><VscSearch /></Button>
            <Input 
            type="text" 
            value={value}
            onChange={ e => setValue(e.target.value)}
            placeholder="search by brand or city"
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
display: flex;
align-items: center;
justify-content: center;
height: 30px;
position: relative;
`
const Input = styled.input`
width: 40vw;
height: 2.5rem;
border: none;
border-radius: 5px;
font-size: 1.2rem;
padding-left: 10px;
background-color: #FFF4CE;
`
const Button = styled.button`
height: 2.5rem;
border:none;
background-color: var(--color-golden-yellow);
color: var(--font);
font-size: 1.5rem;
padding: 0 10px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
`

export default SearchBar;