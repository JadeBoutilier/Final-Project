import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { DesignersContext } from "./DesignersContext";
import { useNavigate} from "react-router-dom";

const SearchBar = () => {
    const {designers} =useContext(DesignersContext)
    const [value, setValue] = useState("");
    const [matchedSuggestion, setMatchedSuggestion]= useState("")
    const navigate = useNavigate()

//returns all designer brands
    let suggestedDesigners = designers.map((designer)=> {
        return designer
    })
    let matchedSuggestions = suggestedDesigners.filter((filteredSuggestion)=>{
        return (
            filteredSuggestion._id.toLowerCase().startsWith(value.toLowerCase()) && value.length >= 1 
        )
    })


    const handleSelect = (e) => {
        console.log(e)
        navigate(`/designer/${matchedSuggestion}`)
        setValue("")
    }

console.log(matchedSuggestion)
    return ( 
        <Wrapper>
            <BarAndButton>
            <Button onClick={e => handleSelect(e.target.value)}><VscSearch /></Button>
            <Input 
            type="text" 
            value={value}
            onChange={ (e) => {
                setValue(e.target.value) 
                let matchedSuggestions = suggestedDesigners.filter((filteredSuggestion)=>{
                    return (
                        //conditional render the length of name  - first letter.
                        filteredSuggestion._id.toLowerCase().startsWith(e.target.value.toLowerCase()) && e.target.value.length >= 1 
                    )
                    })
                setMatchedSuggestion(matchedSuggestions[0]?._id)         
            }}
            placeholder="search by brand or city"
            onKeyDown={(e) => {
                if (e.key === "Enter"){
                    handleSelect(e.target.value)
                    setValue("")
                }
            }
            }
            ></Input>
            </BarAndButton>
            {matchedSuggestions.length > 0 && (
            <StyledList>
            {matchedSuggestions.map((filteredSuggestion) => {
                const indexValue = filteredSuggestion?._id?.toLowerCase()
                    .toLowerCase()
                    .indexOf(value.toLowerCase());
                const firstHalf = filteredSuggestion?._id?.substring(
                    0,
                    value.length + indexValue
                );
                const secondHalf = filteredSuggestion?._id?.substring(
                    value.length + indexValue
                );
                return (
                    <StyledListSuggestion
                    key={filteredSuggestion._id}
                    onClick={e => handleSelect(e.target.value)}
                    >
                    {firstHalf}
                    <StyledSpan>{secondHalf}</StyledSpan>
                    </StyledListSuggestion>
                );
                })}
            </StyledList>
            )}
            
        </Wrapper>
     );
}
 
const Wrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
height: 30px;
position: relative;
`
const BarAndButton =styled.div`
display:flex;
`
const Input = styled.input`
width: 40vw;
height: 2.5rem;
border: none;
border-radius: 5px;
font-size: 1.2rem;
padding-left: 10px;
background-color: var(--color-lightGrey);
color: var(--color-darkGrey);

&:focus {
    outline: none !important;
}
`
const Button = styled.button`
height: 2.5rem;
border:none;
background-color: var(--color-grey);
color: var(--font);
font-size: 1.5rem;
padding: 0 10px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
`
const StyledList=styled.ul`
    position: absolute;
    left: 44px;
    top: 33px;
    width: calc(100% - 44px);
    height: 2.5rem;
    font-size: 1rem;
`
const StyledListSuggestion=styled.li`
height: 1.5rem;
background-color: var(--color-lightGrey);
border-radius: 0 0 5px 5px;
padding-left: 10px;
`
const StyledSpan = styled.span`
font-style: bold;
`;
export default SearchBar;