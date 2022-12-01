import { useNavigate } from "react-router-dom";
import { createRef, useContext, useRef, } from "react";
import styled from "styled-components";
import { DesignersContext } from "./DesignersContext";

const Categories = () => {
const {designers} =useContext(DesignersContext) 
const navigate = useNavigate

//how to match ref to button? 
let ref = useRef([createRef(), createRef()]);

const handleClick = (i) => {
  // console.log("hiii")
  // console.log("hi", ref?.current)
  ref.current[0].focus();
};

  // Finding all designer categories
  const designerCategories = designers.map((designer) => {
    return designer.category;
  });

  // Created new set designer categories- filtering out duplicates
  const newDesignerCategorySet = new Set(designerCategories);
  const newDesignerCategoryArray = [...newDesignerCategorySet];
  console.log(newDesignerCategoryArray)

  

if(!designers){
  return <div>Loading</div>
}
// console.log(designers)
return (
  <Wrapper>
    <CategoryList>
    {newDesignerCategoryArray.map((designerCategory, index)=> {
    return <Button key={index} onClick={handleClick}>{designerCategory}</Button>
    })}
    </CategoryList>
    <CategoryHeaders>
    {newDesignerCategoryArray.map((designerCategory, index)=> {
    return (<Category key={index}>
      <Title ref={ref.current[index]}>{designerCategory}</Title>

      {designers.map((designer) => {
        if (designer.category === designerCategory){
          return <Image key={designer._id} src={designer.brandPic1} alt="brand"/>
        }
      })}
      
    </Category>
    )})}

    </CategoryHeaders>


  </Wrapper>);
};

const Wrapper = styled.div`
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
`;
const CategoryList =styled.div`
display: flex;
justify-content: space-evenly;
`
const Button= styled.button`
cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--color-darkGrey);
  font-size: 1.2rem;
  padding: 0 0 1px 0px;
  line-height: 1;
  &:hover {
border-bottom: 1px solid var(--color-darkGrey);
padding: 0;
  }
  &.active {
border-bottom: 1px solid var(--color-darkGrey);
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
const Image =styled.img`
width: 40%;
`
export default Categories;
