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
            <SignInTitle>Sign in as either User or Designer</SignInTitle>
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
            <Button onSubmit>Sign In</Button>
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
            <Button onSubmit>Sign In</Button>
            </Designer>
            </Login>
        </Wrapper>
     );
}
 
const Wrapper = styled.div`
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: var(--color-golden-yellow);
    color: var(--color-burnt-red);
    height: 100vh;
  height: 100vh;
`;
const SignInTitle =styled.div`
margin-bottom: 40px;;
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
background-color: var(--color-burnt-red);
&:hover {
    color: var(--color-golden-yellow);
}
`
export default SignIn;