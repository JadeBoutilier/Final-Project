import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import { SignInContext } from "./SignInContext";

const SignIn = ({
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    designerEmail,
    setDesignerEmail,
    designerPassword,
    setDesignerPassword}) => {
 const {userSignInVerification, designerSignInVerification} = useContext(SignInContext)

 const navigate = useNavigate()

 const userHandleSubmit = (e)=> {
     e.preventDefault()
     userSignInVerification(userEmail, userPassword)
     .then(res => { 
         res === true
         ? navigate("/")
         : alert("Unknown account.")})  
 }

 const designerHandleSubmit = (e)=> {
    e.preventDefault()
    designerSignInVerification(designerEmail, designerPassword)
    .then(res => { 
        res === true
        ? navigate("/")
        : alert("Unknown account.")})  
}

    return ( 
        <Wrapper>
          <Container>
            <SignInTitle>Sign in as either a general user or designer</SignInTitle>
            <Login>
            <User onSubmit={userHandleSubmit}>
                <div>User</div>
                <label htmlFor="email" id="email">
              <Input
                type="text"
                value={userEmail}
                placeholder="Email"
                onChange={(e) => setUserEmail(e.target.value)}
              ></Input>
            </label>
            <label htmlFor="password" id="password">
              <Input
                type="password"
                value={userPassword}
                placeholder="Password"
                onChange={(e) => setUserPassword(e.target.value)}
              ></Input>
            </label>
            <Button>Sign In</Button>
            </User>
            <Designer onSubmit={designerHandleSubmit}>
                <div>Designer</div>
                <label htmlFor="email" id="email">
              <Input
                type="text"
                value={designerEmail}
                placeholder="Email"
                onChange={(e) => setDesignerEmail(e.target.value)}
              ></Input>
            </label>
                <label htmlFor="password" id="password">
              <Input
                type="password"
                value={designerPassword}
                placeholder="Password"
                onChange={(e) => setDesignerPassword(e.target.value)}
              ></Input>
            </label>
            <Button>Sign In</Button>
            </Designer>
            </Login>
            </Container>
        </Wrapper>
     );
}
 
const Wrapper = styled.div`
    font-family: var(--font);
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: var(--color-grey);
    color: var(--color-darkGrey);
    height: 100vh;
  height: 100vh;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 10%;
`
const SignInTitle =styled.div`
margin-bottom: 40px;
display: flex;
justify-content: center;
`
const Login= styled.div`
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 50vw;
`
const User = styled.form`
display: flex;
flex-direction: column;
`
const Designer = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
margin-top: 15px 0;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0 0 1px 0px;
  line-height: 1;
  margin-left: 20px;
  color: var(--color-darkGrey);
  width: fit-content;
  margin-top: 30px;
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    padding: 0;
  }
`

export default SignIn;