import { NavLink, useNavigate } from "react-router-dom";
import GoogleMapsHome from "./GoogleMapsHome";
import GoogleMapsCalculator from "./GoogleMapsCalculator";
import styled, { keyframes } from "styled-components";
import * as FontAwesome from "react-icons/fa";
import Events from "./Events";
import { useContext, useEffect, useRef, useState } from "react";
import { DesignersContext } from "./DesignersContext";


const Home = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const {designers} = useContext(DesignersContext)
  const [randomDesigner, setRandomDesigner] = useState(null)

  const handleClick = () => {
    navigate("/");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };


  const getNewDesigner = () => {
    const newDesigner = designers[Math.floor(Math.random() * designers.length)];
    // console.log(newDesigner)
    setRandomDesigner(newDesigner);
  }
    
useEffect(()=>{
getNewDesigner()
  }, [])

  const handleClick2= () => {
    navigate(`/designer/${randomDesigner?._id}`)
  }
if (!designers || !randomDesigner){
  return(
    <Spinner>
    <FontAwesome.FaSpinner />
  </Spinner>
  )
}
  // console.log(randomDesigner)
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
      <Underline></Underline>
      <FeaturedDesigner>
        <Title1>Designer</Title1>
        <Title2>Focus</Title2>
        <Title3>{randomDesigner?.brand}</Title3>
        <ImageButton onClick={handleClick2}><Image src={randomDesigner?.brandPic1} alt="Featured brand"/></ImageButton>
      </FeaturedDesigner>
      <MapTitle>Find Local Montreal Brands</MapTitle>
      <Underline></Underline>
        <GoogleMapBox>
          <GoogleMapsHome />
        </GoogleMapBox>
        <Route>
        <RouteButton onClick={() => setToggle(!toggle)}>
          Find your route
        </RouteButton>
        {toggle === true ? <CalcBox><GoogleMapsCalculator /></CalcBox> : ""}
        </Route>
      <EventsTitle>Events</EventsTitle>
      <Underline></Underline>
      <div ref={ref}>
        <Events />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
  padding: 0 5% 5% 5%;
`;
const ShopBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  color: var(--color-darkGrey);
  font-size: 1rem;
  padding: 0 0 1px 0px;
  line-height: 1;
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    padding: 0;
  }
  &.active {
    border-bottom: 1px solid var(--color-darkGrey);
  }
`;
const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-darkGrey);
  font-size: 1rem;
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  padding: 0 0 1px 0px;
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    padding: 0;
  }

  &.active {
    border-bottom: 1px solid var(--color-darkGrey);
  }
`;
const Image = styled.img`
width: 100%;
  margin-bottom: 30px;
  object-fit: cover;
  cursor: pointer;
  `;
const FeaturedDesigner = styled.div`
  position: relative;
  `;
const Title1 = styled.div`
  position: absolute;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  top: 1px;
  left: 20px;
  font-size: 7rem;
  font-family: var(--font-headers);
  z-index: 1;
  `;
const Title2 = styled.div`
  position: absolute;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  top: 100px;
  left: 20px;
  font-size: 7rem;
  font-family: var(--font-headers);
  z-index: 1;
  `;
const Title3 = styled.div`
     position: absolute;
    top: 217px;
    left: 27px;
    font-size: 1.7rem;
    font-family: var(--font-headers);
    z-index: 1;
  `;
const Underline = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin-bottom: 30px;
  `;
const EventsTitle = styled.div`
  font-size: 3rem;
  font-family: var(--font-headers);
  padding-left: 30px;
  `;
const MapTitle = styled.div`
  font-size: 3rem;
  font-family: var(--font-headers);
  padding-left: 30px;
  `;
  const GoogleMapBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;
    width: 100%;
    overflow: hidden;
  `;
const RouteButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-size: 1rem;
  
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
  }
  `;
  const Route = styled.div`
  margin: 10px 0 30px 0;
  `
   const CalcBox = styled.div`
   margin: 10px 0 30px 0;
   `
   const ImageButton =styled.button`
   border:none;
   background-color: transparent;
   cursor: pointer;
   `
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
export default Home;
