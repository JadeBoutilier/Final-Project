import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { DesignersContext } from "./DesignersContext";


const Brands = () => {

const {designers} =useContext(DesignersContext)
const navigate = useNavigate()

  if (!designers) {
    return <div>Loading...</div>;
  }
  console.log(designers)
    return ( 
    <Wrapper>
      <Grid>
      {designers.map((designer)=> {
        return (
          <div key={designer._id}
          onClick={()=> navigate(`/designer/${designer._id}`)}>
            <Image src={designer.brandPic2} alt="band promotion material"/>
            <div>{designer.brand}</div>
          </div>
        )
      })}
      </Grid>
    </Wrapper> 
    );
}
 
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
background-color: var(--color-golden-yellow);
color: var(--color-burnt-red);
font-family: var(--font);
`;
const Image= styled.img`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 20%;

`
const Grid = styled.div`
  display: flex;
  `;
export default Brands;