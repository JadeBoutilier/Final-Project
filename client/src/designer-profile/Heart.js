// import { SignInContext } from "../SignInContext";
import {FaHeart} from "react-icons/fa";
import styled from "styled-components";
import { /*useContext,*/ useState } from "react";

const Heart = () => {
    const [isActive, setIsActive] = useState(false);
    // const { userSignedIn } = useContext(SignInContext);

    const handleClick = () => {
        setIsActive((current) => !current);
      };
    
      const heartStyle = isActive ? "var(--color-lightGrey)" : "var(--color-darkGrey)"
      

    return (       
    <HeartDiv id="heartdiv">
      <FavouriteButton
      onClick={handleClick}
      style = {{color: heartStyle}}     
      >
        <FaHeart />
      </FavouriteButton>

    

  </HeartDiv> );
}
 

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
export default Heart;