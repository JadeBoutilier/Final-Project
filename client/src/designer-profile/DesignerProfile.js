import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import Events from "../Events";
import * as FontAwesome from "react-icons/fa";
import DesignerIntro from "./DesignerIntro";
import DesignerAbout from "./DesignerAbout";
import Underline from "./Underline";
import Boutique from "./Boutique";

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
  }, [id]);

  if (!designer) {
    return (
      <Spinner>
        <FontAwesome.FaSpinner />
      </Spinner>
    );
  }
  console.log("events", designer.events);
  return (
    <Wrapper>
      <BrandNameSection>
        <BrandNameCategory>
          <BrandName>{designer.brand}</BrandName>
          <Category>{designer.category}</Category>
        </BrandNameCategory>
        <Underline />
      </BrandNameSection>
      <DesignerIntro
        designerImage={designer.brandPic2}
        tagLine={designer.tagLine}
        aboutSection1={designer.aboutSection1}
      />
      <DesignerAbout
        aboutSection2={designer.aboutSection2}
        headShot={designer.designerPhoto}
        name={designer.firstName}
        website={designer.website}
        instagram={designer.instagram}
        email={designer.designerEmail}
      />
      <Boutique
        boutiquePicture={designer.boutiquePic}
        schedule={designer.openingHours}
        services={designer.services}
        studioMates={designer.sharesStudioWith}
        logo={designer.logo}
        latitude={designer.latt}
        longitude={designer.longt}
        address={designer.address}
        city={designer.city}
        postalCode={designer.postalCode}

      />
      <Underline />
      <HorizontalPic
        src={designer.brandPic1}
        alt="Designer promotion material"
      />
      <Header>Upcoming Events</Header>
      <Underline30></Underline30>
      <Events />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
  padding: 0 5% 5% 5%;
`;
const BrandNameSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const BrandNameCategory = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const BrandName = styled.div`
  font-family: var(--font-headers);
  font-size: 3rem;
`;
const Category = styled.div`
  font-style: italic;
  font-size: 1.5rem;
`;

const Underline30 = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin: 5px 0;
  margin-bottom: 30px;
`;

const HorizontalPic = styled.img`
  width: 100%;
  margin: 30px 0;
`;

const Header = styled.div`
  font-family: var(--font-headers);
  font-size: 2rem;
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
export default DesignerProfile;
