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
              <div>hello {userSignedIn? userSignedIn.firstName : designerSignedIn.firstName}</div> 
              <SignOut onClick={userHandleClick}>Log out</SignOut>
            </>
          ) : (
            <SignInNavigationLink to="/sign-in" end>
              sign in
            </SignInNavigationLink>
          )}
        </SignInWrapper>
      </MainHeader>
      <ShopBy>
        <NavigationLink to="/brands" end>
          brands
        </NavigationLink>
        <NavigationLink to="/categories" end>
          categories
        </NavigationLink>
      </ShopBy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-golden-yellow);
  color: var(--color-burnt-red);
  font-family: var(--font);
`;
const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-burnt-red);
  font-size: 1.5rem;
`;
const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;
const SignInWrapper = styled.div`
  display: flex;
`;
const SignInNavigationLink= styled(NavLink)`
text-decoration: none;
color: var(--color-burnt-red);
font-size: 1.3rem;
`;
const ShopBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 40px;
`;
const SignOut = styled.div``;
export default Header;
