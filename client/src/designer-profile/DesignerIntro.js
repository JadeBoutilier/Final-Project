import styled from "styled-components";
import Heart from "./Heart";

const DesignerIntro = ({ designerImage, tagLine, aboutSection }) => {
  return (
    <div>
      <BrandIntro>
        <VerticalPic src={designerImage} alt="Designer promotion material" />
      <NameTagLine id="NameTagLine">
      <Heart />
        <TagLine>{tagLine}</TagLine>
        <About1>{aboutSection}</About1>
      </NameTagLine>
      </BrandIntro>
    </div>
  );
};

const BrandIntro = styled.div`
  display: flex;
  justify-content: space-around;
`;
const VerticalPic = styled.img`
  width: 40%;
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
