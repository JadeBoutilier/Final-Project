import GoogleMaps from "./GoogleMaps";
import GoogleMapsCalculator from "./GoogleMapsCalculator";
import styled from "styled-components";
// import Ticker from 'react-ticker'
import Veri from "./assets/Veri.png"
import Calendar from "./Calendar";


const Home = () => {
  return (
    <Wrapper>
      <FeaturedDesigner>
        <Title>Designer of the week_____VERI</Title>
        <Image src={Veri} alt="featured brand"></Image>
      </FeaturedDesigner>
      <GoogleMapBox>
      {/* <Ticker tickerStyle={{width: "100%"}} >
        {({ index }) => (
            <>
                <h1>This is the Headline of element #{index}!</h1>
                <img src="www.my-image-source.com/" alt=""/>
            </>
        )}
    </Ticker> */}
        <GoogleMaps />
        <GoogleMapsCalculator />
      </GoogleMapBox>
      <Calendar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f9e18d;
`;
const GoogleMapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
width: 100vw;
padding: 60px 0;
`
const FeaturedDesigner = styled.div`
position: relative;
`
const Title = styled.div`
position: absolute;
top: 1px;
left: 20px;
font-size: 7rem;
`

export default Home;
