import GoogleMaps from "../components/google-maps/GoogleMaps";
import styled from "styled-components";


const Boutique = ({boutiquePicture, schedule, services, studioMates, logo, longitude, latitude, address, city, postalCode }) => {
    return (      <BoutiqueInfo id="boutique">
    <BoutiqueData>
      <Header>
        <div>Boutique</div>
        <Underline30></Underline30>
      </Header>
      <AboutBoutique>
        <BoutiquePic src={boutiquePicture} alt="Designer boutique" />
        <BoutiqueData2>
          <Info>
            <SmallHeader>Open for walk-ins:</SmallHeader>
            <Italic>
              {schedule?.map((dayTime, index) => {
                return <TimeOptions key={index}>{dayTime}</TimeOptions>;
              })}
            </Italic>
          </Info>

          <Info>
            <SmallHeader>Services:</SmallHeader>
            <Italic>
              {services?.map((service, index) => {
                return <Options key={index}>{service}</Options>;
              })}
            </Italic>
          </Info>

          <Info>
            <SmallHeader>Studio Mates:</SmallHeader>
            <Italic>
              {studioMates?.map((studioMate, index) => {
                return <Options key={index}>{studioMate}</Options>;
              })}
            </Italic>
          </Info>

          <Location>
            <LogoSection>
              <Logo src={logo} alt="Designer Logo" />
            </LogoSection>
            <Google>
              <GoogleMaps lat={latitude} lng={longitude} />
            </Google>
            <Italic> {address}</Italic>
            <Italic>
              {" "}
              {city}, {postalCode}
            </Italic>
          </Location>
        </BoutiqueData2>
      </AboutBoutique>
    </BoutiqueData>
  </BoutiqueInfo> );
}
const Italic = styled.div`
font-style: italic;
font-size: 1rem;
margin-left: 5px;
margin: 1px 0;
`;
const SmallHeader = styled.div`
  font-size: 1rem;
`;
const Options = styled.span``;
const TimeOptions = styled.div``;
const BoutiquePic = styled.img`
  width: 40%;
  object-fit: contain;
`;
const Header = styled.div`
  font-family: var(--font-headers);
  font-size: 2rem;
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
const AboutBoutique = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Underline30 = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin: 5px 0;
  margin-bottom: 30px;
`;
export default Boutique;