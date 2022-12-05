import { useContext, useState } from "react";
import styled from "styled-components";
import { DesignersContext } from "./DesignersContext";
import { SignInContext } from "./SignInContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  // const id = useParams().id;
  const { userSignedIn } = useContext(SignInContext);
  const { designers } = useContext(DesignersContext);
  const [userFavourites, setUserfavourites] = useState(null);
  // const [userProfileData, setuserProfileData] = useState(userSignedIn);

  const array = userSignedIn.favourites;

  const individualDesigner = designers.map((designer) => {
    return designer;
  });

  // console.log("FAVOURITE", favouriteBrands)

  if (!userSignedIn || userFavourites) {
    return;
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
      <Container>
        {individualDesigner?.map((x) => {
          if (array?.includes(x._id)) {
            return (
              <BrandContainer key={x._id} onClick={() => navigate(`/designer/${x._id}`)}>
                <Image src={x.brandPic2} alt="brand promotion" />
                <div>{x.brand}</div>
              </BrandContainer>
            );
          }
        })}
      </Container>
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
  height: 100vh;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 30px;
`;
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
const Container = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const BrandContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;
const Image = styled.img`
  height: 13rem;
  object-fit: cover;
`;
export default UserProfile;
