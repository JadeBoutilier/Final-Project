import { useNavigate } from "react-router-dom";
import { createRef, useContext, useRef, } from "react";
import styled from "styled-components";
import { DesignersContext } from "./DesignersContext";

const Categories = () => {
const {designers} =useContext(DesignersContext) 
const navigate = useNavigate()


  // Finding all designer categories
  const designerCategories = designers.map((designer) => {
    return designer.category;
  });

  // Created new set designer categories- filtering out duplicates
  const newDesignerCategorySet = new Set(designerCategories);
  const newDesignerCategoryArray = [...newDesignerCategorySet];
  // console.log(newDesignerCategoryArray)

  

if(!designers){
  return <div>Loading</div>
}
// console.log(designers)
return (
  <Wrapper>
  <Header>Categories</Header>
  <Underline></Underline>
    <CategoryHeaders>
    {newDesignerCategoryArray.map((designerCategory, index)=> {
    return (<Category key={index}>

      {designers.map((designer) => {
        if (designer.category === designerCategory){
          return <Image key={designer._id} onClick={() => navigate(`/designer/${designer._id}`)} src={designer.brandPic2} alt="brand"/>
        }
      })}
      <Title >{designerCategory}</Title>
      <Underline></Underline>
      
    </Category>
    )})}

    </CategoryHeaders>


  </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
  padding: 0 5% 5% 5%;
`;
const Header =styled.div`
font-family: var(--font-headers);
font-size: 3rem;
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
font-family: var(--font-headers);
font-size: 2rem;
`
const Image = styled.img`
  height: 13rem;
  object-fit: cover;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;
const Underline = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin: 5px 0;
  margin-bottom: 20px;
`;
export default Categories;
