import styled from "styled-components";
import { useContext, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { DesignersContext } from "./DesignersContext";
import { useNavigate} from "react-router-dom";

const SearchBar = () => {
    const {designers} =useContext(DesignersContext)
    const [value, setValue] = useState("");
    const navigate = useNavigate()

//returns all designer brands
    let suggestedDesigners = designers.map((designer)=> {
        return designer
    })
    //
    let matchedSuggestions = suggestedDesigners.filter((filteredSuggestion)=>{
        return (
            filteredSuggestion.brand.toLowerCase().includes(value.toLowerCase()) && value.length >= 1 
        )
    })
    const handleSelect = () => {
        //how to navigate to designer page
        const selectedDesigner = designers?.filter((designer)=> {
            if (value.toLowerCase === ""){
                return ""
            } else {
            return designer.brand === value.toLowerCase
            }
        })
        navigate(`/designer/${selectedDesigner}`)
    }

    return ( 
        <Wrapper>
            <BarAndButton>
            <Button onClick={handleSelect}><VscSearch /></Button>
            <Input 
            type="text" 
            value={value}
            onChange={ e => setValue(e.target.value)}
            placeholder="search by brand or city"
            onKeyDown={(e) => {
                if (e.key === "Enter"){
                    handleSelect(e.target.value)
                }
            }
            }
            ></Input>
            </BarAndButton>
            {matchedSuggestions.length > 0 && (
            <StyledList>
            {matchedSuggestions.map((filteredSuggestion) => {
                const indexValue = filteredSuggestion.brand
                    .toLowerCase()
                    .indexOf(value.toLowerCase());
                const firstHalf = filteredSuggestion.brand.substring(
                    0,
                    value.length + indexValue
                );
                const secondHalf = filteredSuggestion.brand.substring(
                    value.length + indexValue
                );
                return (
                    <StyledListSuggestion
                    key={filteredSuggestion.id}
                    onClick={() => handleSelect(filteredSuggestion.brand)}
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
background-color: #FFF4CE;
color: var(--color-burnt-red);

&:focus {
    outline: none !important;
    color: var(--color-burnt-red);
}
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
background-color: #FFF4CE;
border-radius: 0 0 5px 5px;
padding-left: 10px;
`
const StyledSpan = styled.span`
`;
export default SearchBar;