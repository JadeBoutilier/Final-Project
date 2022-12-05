import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaHeart } from "react-icons/fa";
import GoogleMaps from "./GoogleMaps";
import { SignInContext } from "./SignInContext";
import Events from "./Events";
import * as FontAwesome from "react-icons/fa";

const DesignerProfile = () => {
  const id = useParams().id;

  const [designer, setDesigner] = useState();
  const [isActive, setIsActive] = useState(false);
  const { userSignedIn } = useContext(SignInContext);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

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
        <Underline></Underline>
      </BrandNameSection>
      <BrandIntro>
        <VerticalPic
          src={designer.brandPic2}
          alt="Designer promotion material"
        />
        <HeartDiv id="heartdiv">
          {userSignedIn &&
          userSignedIn?.Favourites?.map((favourite) => favourite) ===
            designer.brand ? (
            <FavouriteButton
              onClick={handleClick}
              style={{
                color: isActive
                  ? "var(--color-lightGrey)"
                  : "var(--color-darkGrey)",
              }}
            >
              <FaHeart />
            </FavouriteButton>
          ) : (
            <FavouriteButton
              onClick={handleClick}
              style={{
                color: isActive
                  ? "var(--color-lightGrey)"
                  : "var(--color-darkGrey)",
              }}
            >
              <FaHeart />
            </FavouriteButton>
          )}
          <NameTagLine id="NameTagLine">
            <TagLine>{designer.tagLine}</TagLine>
            <About1>{designer.aboutSection1}</About1>
          </NameTagLine>
        </HeartDiv>
      </BrandIntro>
      <AboutSection>
        <AboutHeader>
          <div>About</div>
          <Underline></Underline>
        </AboutHeader>
        <AboutBrand id="aboutBrand">
          <HeaderInfo>
            <About2>{designer.aboutSection2}</About2>
          </HeaderInfo>
          <ContactBrand>
            <Portrait src={designer.designerPhoto} alt="Designer portrait" />
            <DesignerData>
              <Contact>
                <div>Owner/ Founder </div>
                <Underline></Underline>
                <Italic>{designer.firstName}</Italic>
              </Contact>
              <Contact>
                <div>Contact</div>
                <Underline></Underline>
                <ExternalLink
                  href={`https://${designer.website}`}
                  target="_blank"
                >
                  <Italic>{designer.website}</Italic>
                </ExternalLink>
                <ExternalLink
                  href={`https://instagram.com/${designer.instagram}`}
                  target="_blank"
                >
                  <Italic>@{designer.instagram}</Italic>
                </ExternalLink>
                <Italic>{designer.designerEmail}</Italic>
              </Contact>
            </DesignerData>
          </ContactBrand>
        </AboutBrand>
      </AboutSection>
      <BoutiqueInfo id="boutique">
        <BoutiqueData>
          <Header>
            <div>Boutique</div>
            <Underline30></Underline30>
          </Header>
          <AboutBoutique>
            <BoutiquePic src={designer.boutiquePic} alt="Designer boutique" />
            <BoutiqueData2>
              <Info>
                <SmallHeader>Open for walk-ins:</SmallHeader>
                <Italic>
                  {designer?.openingHours?.map((dayTime, index) => {
                    return <TimeOptions key={index}>{dayTime}</TimeOptions>;
                  })}
                </Italic>
              </Info>
              <Underline></Underline>
              <Info>
                <SmallHeader>Services:</SmallHeader>
                <Italic>
                  {designer?.services?.map((service, index) => {
                    return <Options key={index}>{service}</Options>;
                  })}
                </Italic>
              </Info>
              <Underline></Underline>
              <Info>
                <SmallHeader>Studio Mates:</SmallHeader>
                <Italic>
                  {designer?.sharesStudioWith?.map((studioMate, index) => {
                    return <Options key={index}>{studioMate}</Options>;
                  })}
                </Italic>
              </Info>
              <Underline></Underline>
              <Location>
                <LogoSection>
                  <Logo src={designer.logo} alt="Designer Logo" />
                </LogoSection>
                <Google>
                  <GoogleMaps lat={designer.latt} lng={designer.longt} />
                </Google>
                <Italic> {designer.address}</Italic>
                <Italic>
                  {" "}
                  {designer.city}, {designer.postalCode}
                </Italic>
              </Location>
            </BoutiqueData2>
          </AboutBoutique>
        </BoutiqueData>
      </BoutiqueInfo>
      <Underline></Underline>
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
const BrandIntro = styled.div`
  display: flex;
  justify-content: space-around;
`;
const NameTagLine = styled.div`
  margin-left: 30px;
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
const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;
const About1 = styled.div`
  font-size: 1.2rem;
  text-align: right;
`;
const AboutBrand = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ContactBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const About2 = styled.div`
  font-size: 1.2rem;
  text-align: left;
`;
const Portrait = styled.img`
  max-height: 16rem;
  margin: 0 15px 0 30px;
`;
const Italic = styled.div`
  font-style: italic;
  font-size: 1rem;
  margin-left: 5px;
  margin: 1px 0;
`;
const Underline = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin: 5px 0;
`;
const Underline30 = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin: 5px 0;
  margin-bottom: 30px;
`;
const DesignerData = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;
const ExternalLink = styled.a`
  text-decoration: none;
  color: var(--color-darkGrey);
`;
const AboutBoutique = styled.div`
  display: flex;
  justify-content: space-around;
`;
const BoutiqueInfo = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;
const BoutiqueData = styled.div`
  display: flex;
  flex-direction: column;
`;
const BoutiqueData2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
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
  margin: 30px 0;
`;
const VerticalPic = styled.img`
  width: 40%;
`;
const Location = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 9px;
`;
const Logo = styled.img`
  max-width: 20%;
  display: flex;
`;
const Header = styled.div`
  font-family: var(--font-headers);
  font-size: 2rem;
`;
const AboutHeader = styled.div`
  font-family: var(--font-headers);
  font-size: 2rem;
  margin-bottom: 30px;
`;
const SmallHeader = styled.div`
  font-size: 1rem;
`;
const Options = styled.span``;
const TimeOptions = styled.div``;

const FavouriteButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--color-grey);
  color: var(--color-lightGrey);
  font-size: 2rem;
  text-align: right;
margin-bottom: 40px;

  &:hover {
    color: 1px solid var(--color-darkGrey);
  }
`;
const HeartDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

