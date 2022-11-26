import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DesignerProfile = () => {
  const id = useParams().id;

  const [designer, setDesigner] = useState();

  //fetching designer info
  useEffect(() => {
    fetch(`/designer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error(data.message);
        } else {
          setDesigner(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!designer) {
    return <div>Loading...</div>;
  }
  console.log(designer)
  return (
    <Wrapper>
      <div>{designer.brand}</div>
      <VerticalPic src={designer.brandPic2} alt="Designer promotion material"/>
      <div>{designer.tagLine}</div>
      <Portrait src={designer.designerPhoto}alt="Designer portrait"/>
      <div>{designer.category}</div>
      <div>
      <div>{designer.firstName}</div>
      <div>{designer.city}</div>
      <div>{designer.services[1]}</div>
      <div>{designer.postalCode}</div>
      <div>{designer.website}</div>
      <div>{designer.openingHours}</div>
      <div>{designer.instagram}</div>
      <BoutiquePic src={designer.boutiquePic} alt="Designer boutique"/>
      <HorizontalPic src={designer.brandPic1} alt="Designer promotion material"/>
      <div>{designer.address}</div>
      <div>{designer.postalCode}</div>
      </div>
      <div>{designer.aboutSection1}</div>
      <div>{designer.aboutSection2}</div>
      <div>{designer.services[0]}</div>
      <div>{designer.sharesStudioWith}</div>
      <Logo src={designer.logo} alt="Designer Logo"/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-golden-yellow);
  color: var(--color-burnt-red);
`;
const Portrait = styled.img`
width: 20%;
`
const BoutiquePic = styled.img`
width: 30%;
`
const HorizontalPic = styled.img`
width: 100%;
`
const VerticalPic = styled.img`
width: 40%;
`
const Logo = styled.img`
width: 20%;
`

export default DesignerProfile;
