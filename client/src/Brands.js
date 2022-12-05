import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DesignersContext } from "./DesignersContext";
import styled, { keyframes } from "styled-components";
import * as FontAwesome from "react-icons/fa";

const Brands = () => {
  const { designers } = useContext(DesignersContext);
  const navigate = useNavigate();

  if (!designers) {
    return (
      <Spinner>
        <FontAwesome.FaSpinner />
      </Spinner>
    );
  }
  // console.log(designers)
  return (
    <Wrapper>
      <Title>All designers</Title>
      <Underline></Underline>
      <Container id="container">
        {designers.map((designer) => {
          return (
            <BrandContainer
              key={designer._id}
              onClick={() => navigate(`/designer/${designer._id}`)}
            >
              <Image src={designer.brandPic2} alt="brand promotion material" />
              <BrandName>{designer.brand}</BrandName>
            </BrandContainer>
          );
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
  height: 100vh;
  padding: 0 5% 5% 5%;
`;
const Underline = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin-bottom: 30px;
`;
const Container = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const BrandContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;
const Image = styled.img`
  height: 13rem;
  object-fit: cover;
`;
const Title = styled.div`
  font-family: var(--font-headers);
  font-size: 3rem;
  margin-top: 30px;
  padding-left: 30px;
`;
const BrandName = styled.div`
  font-size: 1rem;
  padding-top: 5px;
`;

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
export default Brands;
