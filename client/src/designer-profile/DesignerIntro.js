import styled from "styled-components";
import Heart from "./Heart";

const DesignerIntro = ({ designerImage, tagLine, aboutSection1 }) => {
  return (
    <Wrapper>
        <VerticalPic src={designerImage} alt="Designer promotion material" />
      <BrandIntro>
      <Heart />
      <NameTagLine id="NameTagLine">
        <TagLine>{tagLine}</TagLine>
        <About1>{aboutSection1}</About1>
      </NameTagLine>
      </BrandIntro>
    </Wrapper>
  );
};
const Wrapper =styled.div`
display: flex;
padding: 0 50px;
`
const BrandIntro = styled.div`
  display: flex;
  flex-direction: column;
`;
const VerticalPic = styled.img`
  max-width: 33%;
  object-fit: contain;
`;

const NameTagLine = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const TagLine = styled.div`
  font-style: italic;
  font-size: 2rem;
  text-align: right;
  margin-bottom: 30px;
`;
const About1 = styled.div`
  font-size: 1.2rem;
  text-align: right;
`;
export default DesignerIntro;
