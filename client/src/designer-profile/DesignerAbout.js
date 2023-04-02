import styled from "styled-components";

const DesignerAbout = ({
  aboutSection2,
  headShot,
  name,
  website,
  instagram,
  email,
}) => {
  return (
    <AboutSection>
      <AboutHeader>
        <div>About</div>

      </AboutHeader>
      <AboutBrand id="aboutBrand">
        <HeaderInfo>
          <About2>{aboutSection2}</About2>
        </HeaderInfo>
        <ContactBrand>
          <Portrait src={headShot} alt="Designer portrait" />
          <DesignerData>
            <Contact>
              <div>Owner/ Founder </div>

              <Italic>{name}</Italic>
            </Contact>
            <Contact>
              <div>Contact</div>

              <ExternalLink href={`https://${website}`} target="_blank">
                <Italic>{website}</Italic>
              </ExternalLink>
              <ExternalLink
                href={`https://instagram.com/${instagram}`}
                target="_blank"
              >
                <Italic>@{instagram}</Italic>
              </ExternalLink>
              <Italic>{email}</Italic>
            </Contact>
          </DesignerData>
        </ContactBrand>
      </AboutBrand>
    </AboutSection>
  );
};
const AboutHeader = styled.div`
  font-family: var(--font-headers);
  font-size: 2rem;
  margin-bottom: 30px;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const AboutBrand = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ContactBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const About2 = styled.div`
  font-size: 1.2rem;
  text-align: left;
`;
const Portrait = styled.img`
  max-height: 16rem;
  margin: 0 15px 0 30px;
`;
const DesignerData = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;
const ExternalLink = styled.a`
  text-decoration: none;
  color: var(--color-darkGrey);
`;
const Italic = styled.div`
  font-style: italic;
  font-size: 1rem;
  margin-left: 5px;
  margin: 1px 0;
`;

export default DesignerAbout;
