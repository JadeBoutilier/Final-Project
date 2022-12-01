import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { DesignersContext } from "./DesignersContext";
import { SignInContext } from "./SignInContext";

const UserProfile = () => {
  const [toggle, setToggle] = useState(false);
  // const id = useParams().id;
  const { userSignedIn } = useContext(SignInContext);
  const {designers} =useContext(DesignersContext)
  // const [favouriteBrands, setFavouriteBrands] = useState()
  
  //Two options to find favourites. ... not sure which method.
  
  const designer = designers.map((designer)=> {
    return designer})

    const designerBrand = designer.map((attribute)=> {
      return attribute.brand
    })
    
    console.log("DESIGNER", designerBrand)
  if (!userSignedIn) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <Title>
        <FavouriteSection>
          {userSignedIn.firstName}'s favourite brands{" "}
        </FavouriteSection>
        <UserInfo>
          <Button onClick={() => setToggle(!toggle)}>Account Info</Button>
        </UserInfo>
      </Title>
            <Underline></Underline>
            {toggle === true ? (
            <InfoSection>
              <Info>Name: {userSignedIn.firstName}</Info>
              <Info>Last Name: {userSignedIn.lastName}</Info>
              <Info>Email: {userSignedIn.userEmail}</Info>
            </InfoSection>
          ) : (
            ""
            )}
{userSignedIn &&
          userSignedIn?.favourites.includes(designerBrand) ?
          (<div>{designer.brand}</div>): ("")
            

           }


{/* {userSignedIn &&
          userSignedIn?.favourites.map((favourite)=> {
            if (favourite === designerBrand){
              console.log("RETURN", favourite)
            return <div>{designer.brand}</div>
            }})} */}
      {/* <Info>City: {userSignedIn.address}</Info> */}
      {/* <Info>{userSignedIn.postalCode}</Info> */}

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
  padding: 0 40px 40px 40px;
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  display: flex;
  flex-direction: column;
  font-family: var(--font);
`;
const Title=styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
margin-top: 30px;

`
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-size: 1rem;
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
  }
`;
const InfoSection = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 5px;
  margin-bottom: 20px;
  justify-content: center;
`;
const Info = styled.div`
  font-size: 0.8rem;
  margin: 2px 0;
  padding-right: 50px;
`;
const FavouriteSection = styled.div`
  font-family: var(--font-headers);
  font-size: 2.5rem;
  padding-left: 30px;
`;
const Underline = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin-bottom: 30px;
`;

export default UserProfile;
