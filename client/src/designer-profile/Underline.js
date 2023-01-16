import styled from "styled-components";

const Underline = () => {
    return  <Line></Line> ;
}

 
const Line = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin: 5px 0;
`;
export default Underline;