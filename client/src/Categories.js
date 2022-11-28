import { useNavigate } from "react-router-dom";
import { useContext, useRef, } from "react";
import styled from "styled-components";
import { DesignersContext } from "./DesignersContext";

const Categories = () => {
const {designers} =useContext(DesignersContext) 
const navigate = useNavigate

const ref = useRef(null)

const handleClick = () => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
};

if(!designers){
  return <div>Loading</div>
}
console.log(designers)
return (
  <Wrapper>
    <CategoryList>
    {designers.map((designer, index)=> {
    return <Button key={index} onClick={handleClick}>{designer.category}</Button>
    })}
    </CategoryList>
    <CategoryHeaders>
    {designers.map((designer, index)=> {
    return (<Category key={index}>
      <Title ref={ref}>{designer.category}</Title>
{/* for each designer - if designer.category === categoryHeader -> show pic * designer name*/}
      <Test>BRAND</Test>
    </Category>
    )})}

    </CategoryHeaders>


  </Wrapper>);
};

const Wrapper = styled.div`
  background-color: var(--color-golden-yellow);
  color: var(--color-burnt-red);
  font-family: var(--font);
`;
const CategoryList =styled.div`
display: flex;
justify-content: center;
`
const Button= styled.button`
border: none;
background-color: transparent;
color: var(--color-burnt-red);
font-size: 1.3rem;
margin: 4px;
&:hover {
border-bottom: 1px solid var(--color-burnt-red);
  }

  &.active {
    border-bottom: 1px solid var(--color-burnt-red);
  }
`
const CategoryHeaders =styled.div`
display: flex;
flex-direction: column;
`
const Category=styled.div`
`
const Title=styled.div`
`
const Test =styled.div`
padding: 150px;
width: 150;
border: 1px solid black;
`
export default Categories;
