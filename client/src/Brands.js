import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext} from "react";
import { DesignersContext } from "./DesignersContext";


const Brands = () => {

const {designers} =useContext(DesignersContext)
const navigate = useNavigate()

  if (!designers) {
    return <div>Loading...</div>;
  }
  // console.log(designers)
    return ( 
    <Wrapper>
      <>All designers:</>
      <Container id="container">
      {designers.map((designer)=> {
        return (
          <BrandContainer key={designer._id}
          onClick={()=> navigate(`/designer/${designer._id}`)}>
            <Image src={designer.brandPic2} alt="brand promotion material"/>
            <BrandName>{designer.brand}</BrandName>
          </BrandContainer>
        )
      })}
      </Container>
    </Wrapper> 
    );
}
 
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey);
    color: var(--color-darkGrey);
    `;
const BrandContainer =styled.div`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-family: var(--font);
    `
const Image= styled.img`
 height: 13rem;
 object-fit: cover;
 `
 const BrandName = styled.div`
 font-family: var(--font-headers);
 font-size: 2rem;
 padding-top: 5px;
 `
const Container = styled.div`
gap: 20px;
display: flex;
justify-content: center;
flex-wrap: wrap;
  `;
export default Brands;