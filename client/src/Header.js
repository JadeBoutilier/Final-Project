import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { SignInContext } from "./SignInContext";

const Header = ({setUserEmail, setUserPassword, setDesignerEmail, setDesignerPassword }) => {

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
    setDesignerSignedIn(false);
    setUserEmail("");
    setDesignerEmail("");
    setUserPassword("");
    setDesignerPassword("")
    navigate("/");
  };


  return (
    <Wrapper>
        <NavigationLink to="/" end>
          LOGO
        </NavigationLink>
        <SearchBar />
        <SignInWrapper>
          {userSignedIn || designerSignedIn? (
            <SignedInName>
              <div>Hello {userSignedIn? userSignedIn.firstName : designerSignedIn.firstName}</div> 
              <SignOut onClick={userHandleClick}>Log out</SignOut>
            </SignedInName>
          ) : (
            <SignInNavigationLink to="/sign-in" end>
              sign in
            </SignInNavigationLink>
          )}
        </SignInWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--color-golden-yellow);
  color: var(--color-burnt-red);
  font-family: var(--font);
`;
const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-burnt-red);
  font-size: 1.5rem;
  margin: 4px;
  &:hover {
border-bottom: 1px solid var(--color-burnt-red);
  }

  &.active {
border-bottom: 1px solid var(--color-burnt-red);
  }
`;

const SignInWrapper = styled.div`
  display: flex;
`;
const SignInNavigationLink= styled(NavLink)`
text-decoration: none;
color: var(--color-burnt-red);
font-size: 1.3rem;
margin: 4px;
&:hover {
border-bottom: 1px solid var(--color-burnt-red);
  }

  &.active {
    border-bottom: 1px solid var(--color-burnt-red);
  }
`;

const SignOut = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
font-size: 1rem;
padding: 0;
color: var(--color-burnt-red);
&:hover {
border-bottom: 1px solid var(--color-burnt-red);
  }
`;
const SignedInName =styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`
export default Header;
