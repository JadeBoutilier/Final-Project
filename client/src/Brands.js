import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";


const Brands = () => {

const [designers, setDesigners] =useState()
const navigate = useNavigate()

  useEffect(() => {
    fetch(`/designers`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error(data.message);
        } else {
          setDesigners(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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