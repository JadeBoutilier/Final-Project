import { useContext, useState, useEffect} from "react";
import styled from "styled-components";
import { DesignersContext } from "./DesignersContext";
import { SignInContext } from "./SignInContext";

const UserProfile = () => {
  // const id = useParams().id;
const {userSignedIn} = useContext(SignInContext)
// const {designers} =useContext(DesignersContext)
// const [favouriteBrands, setFavouriteBrands] = useState()
 

//Two options to find favourites. ... not sure which method.

// const findFavourites = ()=> {
  //   designers.map((designer)=> {
  //   return designer === userSignedIn.favourites.map((favourite, index) => { 
  //     return favourite})})}

  if (!userSignedIn) {
    return <div>Loading...</div>;
  }
  console.log(userSignedIn);
  return (
    <Wrapper>
      <>Welcome {userSignedIn.firstName} {userSignedIn.lastName}</>
      <UserInfo>
      <>{userSignedIn.userEmail}</>
      <>{userSignedIn.userPassword}</>
      <>{userSignedIn.address}</>
      <>{userSignedIn.postalCode}</>
      </UserInfo>
      <>Your favourite brands: </>
      {/* {designers.forEach((designer)=> {
        if (designer === userSignedIn.favourites.map((favourite, index) => { 
          return favourite})){
          return (
            <div>
            <img src={designer.brandPic2} alt="Brand promotional material"/>
            <div>{designer.brand}</div>
            </div>
          )
        }
      })} */}


    </Wrapper>
  );
};

const Wrapper = styled.div`
background-color: var(--color-grey);
color: var(--color-darkGrey);
display: flex;
`;
const UserInfo = styled.div`
display: flex;
flex-direction: column;
`;

export default UserProfile;
