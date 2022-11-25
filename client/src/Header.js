import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { SignInContext } from "./SignInContext";

const Header = ({setUserEmail, setUserPassword, setDesignerEmail, setDesignerPassword}) => {
  const {
    userSignedIn,
    setUserSignedIn,
    designerSignedIn,
    setDesignerSignedIn,
  } = useContext(SignInContext);
  
  const navigate = useNavigate();

  const userHandleClick = (e) => {
    e.preventDefault();
    setUserSignedIn(false);
    setUserEmail("");
    setUserPassword("");
    navigate("/");
  };

  return (
    <Wrapper>
      <MainHeader>
        <NavigationLink to="/" end>
          LOGO
        </NavigationLink>
        <SearchBar />
        <SignInWrapper>
          {userSignedIn || designerSignedIn? (
            <>
              <div>Hello {userSignedIn? userSignedIn.firstName : designerSignedIn.firstName}/</div> 
              <SignOut onClick={userHandleClick}>Log out</SignOut>
            </>
          ) : (
            <NavigationLink to="/sign-in" end>
              Sign In
            </NavigationLink>
          )}
        </SignInWrapper>
      </MainHeader>
      <ShopBy>
        <NavigationLink to="/brands" end>
          Brands
        </NavigationLink>
        <NavigationLink to="/categories" end>
          Categories
        </NavigationLink>
      </ShopBy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9e18d;
`;
const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;
const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;
const SignInWrapper = styled.div`
  display: flex;
`;
const ShopBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 40px;
`;
const SignOut = styled.div``;
export default Header;
