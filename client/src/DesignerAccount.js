import { useContext } from "react";
import { SignInContext } from "./SignInContext";
import styled from "styled-components";

const DesignerAccount = () => {
    const {designerSignedIn} = useContext(SignInContext)
   
    return ( 
        <Wrapper>{designerSignedIn.firstName}</Wrapper>
     );
}
 const Wrapper = styled.div`
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
`;
 
export default DesignerAccount;