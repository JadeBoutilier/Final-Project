import { NavLink, useNavigate } from "react-router-dom";
import GoogleMaps from "./GoogleMaps";
import GoogleMapsCalculator from "./GoogleMapsCalculator";
import styled from "styled-components";
// import Ticker from 'react-ticker'
import Veri from "./assets/Veri.png"
import Events from "./Events";
import { useContext, useEffect, useRef, useState } from "react";
import { DesignersContext } from "./DesignersContext";


//FEATURED DESIGNER - select designer at random and display designer.brand /designer horizontal image
//click to go to page
const Home = () => {
  
  const ref = useRef(null)
  const navigate= useNavigate()
  // const {designers} = useContext(DesignersContext)
  // const [FeaturedDesigner, setFeaturedDesigner] = useState([])

  const handleClick = () => {
    navigate("/")
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
//Featured Designer
  // const randomDesignerFunc = () => {
  //   const randomDesigner = designers[Math.floor(Math.random() * designers.length)];
  //   setFeaturedDesigner(randomDesigner)
  // }
  // useEffect(()=>{
  //   randomDesignerFunc()
  // }, [])


  return (
    <Wrapper>
      <ShopBy>
        <NavigationLink to="/brands" end>
          Brands
        </NavigationLink>
        <Button onClick={handleClick}>Events</Button>
        <NavigationLink to="/categories" end>
          Categories
        </NavigationLink>
      </ShopBy>
      <FeaturedDesigner>
        <Title1>Designer</Title1>
        <Title2>Focus</Title2>
        <Title3>Veri</Title3>
        <Image src={Veri} alt="Featured brand"></Image>
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
      <div>Events</div>
     <div ref={ref}><Events /></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
`;
const ShopBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 20px;
`;
const Button =styled.button`
  border: none;
  background-color: transparent;
  color: var(--color-darkGrey);
  font-size: 1rem;
  margin: -2px;
  &:hover {
border-bottom: 1px solid var(--color-darkGrey);
  }
  &.active {
border-bottom: 1px solid var(--color-darkGrey);
  }
  `
  const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-darkGrey);
  font-size: 1rem;
  margin: 0;
  padding-bottom:2px;
  &:hover {
border-bottom: 1px solid var(--color-darkGrey);
  }

  &.active {
border-bottom: 1px solid var(--color-darkGrey);
  }
`;
const GoogleMapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
width: 100vw;
margin-bottom: 80px;
`
const FeaturedDesigner = styled.div`
position: relative;
`
const Title1 = styled.div`
position: absolute;
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
top: 1px;
left: 20px;
font-size: 7rem;
/* font-family: bely-display, sans-serif; */
font-family: var(--font-headers);
`
const Title2 = styled.div`
position: absolute;
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
top: 100px;
left: 20px;
font-size: 7rem;
/* font-family: bely-display, sans-serif; */
font-family: var(--font-headers);
`
const Title3 = styled.div`
position: absolute;
bottom: 112px;
    left: 26px;
    font-size: 3rem;
/* font-family: bely-display, sans-serif; */
font-family: retiro-std-24pt, sans-serif;
`

export default Home;
