import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GoogleMaps from "./GoogleMaps";
import { VscLayersDot } from "react-icons/vsc";

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
      <BrandNameCategory>
      <BrandName>{designer.brand}</BrandName>
      <Category><span>__________________</span>{designer.category}</Category>
      </BrandNameCategory>
      <BrandIntro>
        <VerticalPic
          src={designer.brandPic2}
          alt="Designer promotion material"
        />
        <NameTagLine id="NameTagLine">
          <TagLine>{designer.tagLine}</TagLine>
          <About1>{designer.aboutSection1}</About1>
        </NameTagLine>
      </BrandIntro>
      <AboutSection>
        <Header>
          <div>About</div>
        <Underline></Underline>
        </Header>
      <AboutBrand id="aboutBrand">
        <HeaderInfo>
        <About2>{designer.aboutSection2}</About2>
        </HeaderInfo>
        <Portrait src={designer.designerPhoto} alt="Designer portrait" />
        <DesignerData>
          <div>Owner: <Italic>{designer.firstName}</Italic></div>
          <div>City: <Italic>{designer.city}</Italic></div>
          <Contact>
            <div>Contact</div>
            <ExternalLink href={`https://${designer.website}`} target="_blank"><Italic>{designer.website}</Italic></ExternalLink>
            <ExternalLink href={`https://instagram.com/${designer.instagram}`} target="_blank"><Italic>@{designer.instagram}</Italic></ExternalLink>
            <Italic>{designer.designerEmail}</Italic>
          </Contact>
        </DesignerData>
      </AboutBrand>
      </AboutSection>
      <BoutiqueInfo id="boutique">
        <BoutiquePic src={designer.boutiquePic} alt="Designer boutique" />
        <BoutiqueData>
          <Header>Boutique</Header>
          <Info>
          <SmallHeader>Weekly hours:</SmallHeader>
          <Text><Italic>{designer.openingHours.map((dayTime, index)=> {
          return <TimeOptions key={index}>{dayTime}</TimeOptions>})}</Italic></Text>
          </Info>
          <>________________________________________________</>
          <Info>
          <SmallHeader>Services offered:</SmallHeader>
          <Text><Italic>{designer.services.map((service, index)=> {
          return <Options key={index}>{service}</Options>})}</Italic></Text>
          </Info>
          <>________________________________________________</>
          <Info>
          <SmallHeader>Shares studio with:</SmallHeader>
          <Text><Italic>{designer.sharesStudioWith.map((studioMate, index)=> {
          return <Options key={index}>{studioMate}</Options>})}</Italic></Text>
          </Info>
          <>________________________________________________</>
            <Google>
              <GoogleMaps/>
            </Google>
            <Location>
          <div>Location: <Italic>{designer.address}</Italic></div>
          <div><Italic>{designer.postalCode}</Italic></div>
          </Location>
      <LogoSection>
      <Logo src={designer.logo} alt="Designer Logo" />
      </LogoSection>
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
const BrandNameCategory=styled.div`
display: flex;
align-items: baseline;
`
const BrandName = styled.div`
  font-family: var(--font-headers);
  font-size: 3rem;
  margin-bottom: 10px;
  `;
const Category=styled.div`
font-style: italic;
`
const BrandIntro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const NameTagLine = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  `;
const TagLine = styled.div`
  font-style: italic;
  font-size: 2rem;
  text-align: right;
  margin-bottom: 30px;
`;
const AboutSection=styled.div`
display: flex;
flex-direction: column;
margin-top: 3rem;
`
const About1 = styled.div`
  font-size: 1.2rem;
  text-align: right;
  `;
const AboutBrand = styled.div`
  display: flex;
  padding: 0 20px;
  `;
  const HeaderInfo =styled.div`
  display: flex;
  flex-direction: column;
  `
const About2 = styled.div`
  font-size: 1.2rem;
  text-align: left;
  `;
  const Portrait = styled.img`
    max-height: 12rem;
    margin: 0 15px;
  `;
const Italic = styled.span`
font-style: italic;
font-size: 1rem;
`
const Underline=styled.div`
font-family: var(--font);
width: 90px;
border-bottom: 1px solid var(--color-darkGrey);
`
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
  margin-top: 3rem;
  justify-content: center;

  `;
const BoutiqueData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;
const Info = styled.div`
    margin: 10px 0 -5px 0;
`
const Google = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px;
    height: 200px;
    width: 350px;
    overflow: hidden;
`;
const BoutiquePic = styled.img`
  width: 40%;
  object-fit: contain;
`;
const HorizontalPic = styled.img`
  width: 100%;
`;
const VerticalPic = styled.img`
  width: 40%;
`;
const Location=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
`
const LogoSection=styled.div`
display: flex;
justify-content: center;
margin: 20px 0;
`
const Logo = styled.img`
  width: 10%;
  display: flex;
margin: 10px 0;

`;

const Header=styled.div`
font-family: var(--font-headers);
font-size: 2rem;
margin-bottom: 10px;
`
const SmallHeader=styled.div`
font-size: 1rem;
margin-bottom: 13px;
`
const Text=styled.div`
margin-left: 70px;
`
const Options =styled.span`
`
const TimeOptions =styled.div`
`
export default DesignerProfile;

    // "openingHours": [{"Day":[ {"Thursday": "Thursday"}]}, [{"11 am": "11 am"}, {"7 pm": "7 pm"}]],