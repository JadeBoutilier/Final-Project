import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GoogleMaps from "./GoogleMaps";

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
    return <div>Loading...</div>;
  }
  console.log(designer);
  return (
    <Wrapper>
      <BrandName>{designer.brand}</BrandName>
      <div>{designer.category}</div>
      <BrandIntro>
        <VerticalPic
          src={designer.brandPic2}
          alt="Designer promotion material"
        />
        <NameTagLine>
          <TagLine>{designer.tagLine}</TagLine>
          <About1>{designer.aboutSection1}</About1>
        </NameTagLine>
      </BrandIntro>
      <AboutBrand id="aboutBrand">
        <div>{designer.aboutSection2}</div>
        <Portrait src={designer.designerPhoto} alt="Designer portrait" />
        <DesignerData>
          <div>Owner: {designer.firstName}</div>
          <div>City: {designer.city}</div>
          <Contact>
            <div>Contact</div>
            <ExternalLink href={`https://${designer.website}`} target="_blank">{designer.website}</ExternalLink>
            <ExternalLink href={`https://instagram.com/${designer.instagram}`} target="_blank">@{designer.instagram}</ExternalLink>
            <>{designer.designerEmail}</>
          </Contact>
        </DesignerData>
      </AboutBrand>
      <BoutiqueInfo id="boutique">
        <BoutiquePic src={designer.boutiquePic} alt="Designer boutique" />
        <BoutiqueData>
          <div>Location: {designer.address}</div>
          <div>{designer.postalCode}</div>
            <Google>
              <GoogleMaps/>
            </Google>
          <div>Weekly hours: {designer.openingHours}</div>
          <div>Services offered: {designer.services}</div>
          <div>Shares studio with: {designer.sharesStudioWith}</div>
          <Logo src={designer.logo} alt="Designer Logo" />
        </BoutiqueData>
      </BoutiqueInfo>
      <HorizontalPic
        src={designer.brandPic1}
        alt="Designer promotion material"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
  padding: 5%;
`;
const BrandIntro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const NameTagLine = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
`;
const BrandName = styled.div`
  font-family: var(--font-headers);
  font-size: 3rem;
  margin-bottom: 10px;
`;
const TagLine = styled.div`
  font-style: italic;
  font-size: 2rem;
  text-align: right;
  margin-bottom: 30px;
`;
const About1 = styled.div`
  font-size: 1.5rem;
  text-align: right;
`;
const AboutBrand = styled.div`
  display: flex;
`;
const DesignerData = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const ExternalLink=styled.a`
text-decoration: none;
`
const BoutiqueInfo = styled.div`
  display: flex;
`;
const BoutiqueData = styled.div`
  display: flex;
  flex-direction: column;
`;
const Google = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 60%;
    height: 200px;
    width: 200px;
    overflow: hidden;
`;
const Portrait = styled.img`
  width: 20%;
`;
const BoutiquePic = styled.img`
  width: 40%;
`;
const HorizontalPic = styled.img`
  width: 100%;
`;
const VerticalPic = styled.img`
  width: 40%;
`;
const Logo = styled.img`
  width: 20%;
`;
const Link=styled.a`
cursor: pointer;
`

export default DesignerProfile;
