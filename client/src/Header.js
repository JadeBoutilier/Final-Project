import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { SignInContext } from "./SignInContext";

const Header = ({ setUserEmail, setUserPassword, setDesignerEmail,setDesignerPassword }) => {
  const navigate = useNavigate();

  const {
    userSignedIn,
    setUserSignedIn,
    designerSignedIn,
    setDesignerSignedIn,
  } = useContext(SignInContext);

  const userHandleClick = (e) => {
    e.preventDefault();
    setUserSignedIn(false);
    setDesignerSignedIn(false);
    setUserEmail("");
    setDesignerEmail("");
    setUserPassword("");
    setDesignerPassword("");
    navigate("/");
  };

  return (
    <Wrapper>
      <NavigationLink to="/" end>
        LOCAL
      </NavigationLink>
      <SearchBar />
      <SignInWrapper>
        {userSignedIn || designerSignedIn ? (
          <SignedInName>
            <Hello>
              Hello{" "}
              {userSignedIn
                ? userSignedIn.firstName
                : designerSignedIn.firstName}
            </Hello>
            <ProfileLogin>
              {userSignedIn ? (
                <ProfileNavigationLink to={`/user/${userSignedIn._id}`} end>
                  Profile
                </ProfileNavigationLink>
              ) : (
                <ProfileNavigationLink
                  to={`/designer/account/${designerSignedIn._id}`}
                  end
                >
                  Profile
                </ProfileNavigationLink>
              )}

              <SignOut onClick={userHandleClick}>Log out</SignOut>
            </ProfileLogin>
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
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
`;
const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-darkGrey);
  font-size: 1.5rem;
  margin: 4px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    cursor: pointer;
  }

  &.active {
    border-bottom: 1px solid var(--color-darkGrey);
  }
`;

const SignInWrapper = styled.div`
  display: flex;
`;
const SignInNavigationLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-burnt-red);
  font-size: 1.1rem;
  padding: 0;
  margin-bottom: 14px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    margin-bottom: 13px;
    padding: 0; 
     cursor: pointer;
  }

  &.active {
    border-bottom: 1px solid var(--color-darkGrey);
    margin-bottom: 13px;
  }
`;const Hello=styled.div`
font-size: 1rem;
margin-bottom: 5px;
`

const SignedInName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SignOut = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0 0 1px 0px;
  margin-left: 10px;
  line-height: 1;
  /* margin-left: 5px; */
  color: var(--color-darkGrey);
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    padding: 0 
  }
`;

const ProfileNavigationLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-darkGrey);
  font-size: 1rem;
  /* margin: 4px; */
  &:hover {   
    padding: 0;
    border-bottom: 1px solid var(--color-darkGrey);
  }

  &.active {
    border-bottom: 1px solid var(--color-darkGrey);
  }
`;
const ProfileLogin = styled.div`
  display: flex;
`;
export default Header;
