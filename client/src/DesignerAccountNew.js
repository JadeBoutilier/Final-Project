import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import * as FontAwesome from "react-icons/fa";
import GoogleMaps from "./GoogleMaps";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";

const DesignerProfile = () => {
  const navigate = useNavigate();
  const id = useParams().id;

  const [designer, setDesigner] = useState(null);

  const handleChange = (key, value) => {
    const { [key]: _, ...rest } = designer; //designer object gets put into rest variable - except for key
    setDesigner({
      ...rest,
      [key]: value,
    });
  };

  useEffect(() => {
    fetch(`/designer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error(data.message);
        } else {
          setDesigner(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(designer);

  const formSubmit = (e) => {
    e.preventDefault();

    fetch("/designer/update", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(designer),
      // brandPic1: images[0].url.url)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400) {
          throw new Error(data.message);
        } else {
          navigate(`/designer/${designer._id}`);
        }
      })
      .catch((error) => window.alert(error));
  };

  if (designer === null) {
    return (
      <Spinner>
        <FontAwesome.FaSpinner />
      </Spinner>
    );
  }
  return (
    <Wrapper onSubmit={(e) => formSubmit(e)}>
      <BrandNameSection>
        <BrandNameCategory>
          <BrandName
            id="brand"
            type="text"
            placeholder={designer.brand}
            onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
          />
          <Category
            id="category"
            onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
          >
            <option value={designer.category}>Jewelry</option>
            <option>Clothing</option>
            <option>Hats</option>
            <option>Furniture</option>
            <option>Art</option>
            <option>Shoes</option>
          </Category>
        </BrandNameCategory>
        <Underline></Underline>
      </BrandNameSection>
      <BrandIntro>
        <PhotoInsert>
          <ImageUpload />
        </PhotoInsert>
        <NameTagLine id="NameTagLine">
          <TagLine
            id="tagLine"
            name="tagLine"
            wrap="hard"
            defaultValue={designer.tagLine}
            onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
          />
          <About1
            id="about1"
            name="about1"
            wrap="hard"
            onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
          >
            {designer.aboutSection1}
          </About1>
        </NameTagLine>
      </BrandIntro>
      <AboutSection>
        <AboutHeader>
          <div>About</div>
          <Underline></Underline>
        </AboutHeader>
        <AboutBrand id="aboutBrand">
          <HeaderInfo>
            <About2
              id="aboutSection2"
              wrap="hard"
              name="aboutSection2"
              onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
            >
              {designer.aboutSection2}
            </About2>
          </HeaderInfo>
          <ContactBrand>
            <PhotoInsert id="photoinsert">
              <ImageUpload />
            </PhotoInsert>
            <DesignerData>
              <Contact>
                <div>Owner/ Founder </div>
                <Underline></Underline>
                <ContactInput
                  id="firstName"
                  type="text"
                  placeholder={designer.firstName}
                  onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
                />
              </Contact>
              <Contact>
                <div>Contact</div>
                <Underline></Underline>
                <ContactInput
                  id="website"
                  type="text"
                  placeholder={designer.website}
                  onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
                />
                <ContactInput
                  id="instagram"
                  type="text"
                  placeholder={designer.instagram}
                  onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
                />
                <ContactInput
                  id="designerEmail"
                  type="text"
                  placeholder={designer.designerEmail}
                  onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
                />
              </Contact>
            </DesignerData>
          </ContactBrand>
        </AboutBrand>
      </AboutSection>
      <BoutiqueInfo id="boutique">
        <BoutiqueData>
          <Header>
            <div>Boutique</div>
            <Underline></Underline>
          </Header>
          <AboutBoutique>
            <PhotoInsert id="photoinsert">
              <ImageUpload />
            </PhotoInsert>
            <BoutiqueData2>
              <Info>
                <SmallHeader>Open for walk-ins:</SmallHeader>
                <Italic>
                  {designer?.openingHours?.map((dayTime, index) => {
                    return (
                      <TimeOptions
                        key={index}
                        id="openingHours"
                        type="text"
                        placeholder={dayTime}
                        onChange={(ev) =>
                          handleChange(ev.target.id, ev.target.value)
                        }
                      />
                    );
                  })}
                  <Button>Add</Button>
                </Italic>
              </Info>
              <Underline></Underline>
              <Info>
                <SmallHeader>Services:</SmallHeader>
                <Italic>
                  {designer?.services?.map((service, index) => {
                    return (
                      <Options
                        key={index}
                        id="services"
                        type="text"
                        placeholder={service}
                        onChange={(ev) =>
                          handleChange(ev.target.id, ev.target.value)
                        }
                      />
                    );
                  })}
                  <Button>Add</Button>
                </Italic>
              </Info>
              <Underline></Underline>
              <Info>
                <SmallHeader>Studio Mates:</SmallHeader>
                <Italic>
                  {designer?.sharesStudioWith?.map((studioMate, index) => {
                    return (
                      <Options
                        key={index}
                        id="sharesStudioWith"
                        type="text"
                        placeholder={studioMate}
                        onChange={(ev) =>
                          handleChange(ev.target.id, ev.target.value)
                        }
                      />
                    );
                  })}
                  <Button>Add</Button>
                </Italic>
              </Info>
              <Underline></Underline>
              <Location>
                <LogoSection>
                  <PhotoInsert id="photoinsert">
                    <ImageUpload />
                  </PhotoInsert>
                </LogoSection>
                <Google>
                  <GoogleMaps lat={designer.latt} lng={designer.longt} />
                </Google>
                <Input
                  id="address"
                  type="text"
                  placeholder={designer.address}
                  onChange={(ev) => handleChange(ev.target.id, ev.target.value)}
                />
                <CityPostalCode>
                  <Input
                    id="city"
                    type="text"
                    placeholder={designer.city + ","}
                  />
                  <Input
                    id="postalCode"
                    type="test"
                    placeholder={designer.postalCode}
                    onChange={(ev) =>
                      handleChange(ev.target.id, ev.target.value)
                    }
                  />
                </CityPostalCode>
              </Location>
            </BoutiqueData2>
          </AboutBoutique>
        </BoutiqueData>
      </BoutiqueInfo>
      <Underline></Underline>
      <HorizontalImageBox>
        <PhotoInsert id="photoinsert">
          <ImageUpload />
        </PhotoInsert>
      </HorizontalImageBox>
      <SubmitReset>
        <Submit onSubmit>Submit</Submit>
      </SubmitReset>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
  padding: 5%;
`;
const BrandNameSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const BrandNameCategory = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const BrandName = styled.input`
  font-family: var(--font-headers);
  font-size: 3rem;
  width: 50%;
  border: 2px solid var(--color-lightGrey);
  background-color: var(--color-lightGrey);
  border-radius: 5px;

  ::placeholder {
    color: var(--color-darkGrey);
  }
`;
const Category = styled.select`
  font-style: italic;
  font-size: 1.5rem;
  border: 2px solid var(--color-lightGrey);
  background-color: var(--color-lightGrey);
  border-radius: 5px;
`;
const BrandIntro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const NameTagLine = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;
const TagLine = styled.textarea`
  font-style: italic;
  width: 100%;
  height: 200px;
  font-size: 2rem;
  text-align: right;
  margin-bottom: 30px;
  font-family: var(--font);
  resize: none;
  border: 2px solid var(--color-lightGrey);
  background-color: var(--color-lightGrey);
  border-radius: 5px;
`;
const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;
const About1 = styled.textarea`
  font-size: 1.2rem;
  text-align: right;
  width: 100%;
  height: 200px;
  font-family: var(--font);
  resize: none;
  border: 2px solid var(--color-lightGrey);
  background-color: var(--color-lightGrey);
  border-radius: 5px;

  ::-webkit-input-placeholder {
    position: relative;
    top: -7px;
  }
`;
const AboutBrand = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;
const ContactBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;
const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const About2 = styled.textarea`
  font-size: 1.2rem;
  text-align: left;
  width: 100%;
  height: 300px;
  font-family: var(--font);
  resize: none;
  border: none;
  background-color: var(--color-lightGrey);
  border-radius: 5px;
`;

const Input = styled.input`
  font-style: italic;
  font-size: 1rem;
  margin-left: 5px;
  margin: 1px 0;
  text-align: center;
  width: 100%;
  border: 2px solid var(--color-lightGrey);
  background-color: var(--color-lightGrey);
  border-radius: 5px;

  ::placeholder {
    color: var(--color-darkGrey);
  }
`;
const ContactInput = styled.input`
  font-style: italic;
  font-size: 1rem;
  margin-left: 5px;
  margin: 1px 0;
  text-align: center;
  border: 2px solid var(--color-lightGrey);
  background-color: var(--color-lightGrey);
  border-radius: 5px;
  color: var(--color-darkGrey);

  ::placeholder {
    color: var(--color-darkGrey);
  }
`;
const Italic = styled.div`
  font-style: italic;
  font-size: 1rem;
  margin-left: 5px;
  margin: 1px 0;
`;
const Underline = styled.div`
  font-family: var(--font);
  width: 100%;
  border-bottom: 1px solid var(--color-darkGrey);
  margin: 5px 0;
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
const AboutBoutique = styled.div`
  display: flex;
  justify-content: space-around;
`;
const BoutiqueInfo = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;
const BoutiqueData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BoutiqueData2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Google = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  height: 200px;
  width: 350px;
  overflow: hidden;
`;
const Location = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 9px;
`;
const Header = styled.div`
  font-family: var(--font-headers);
  font-size: 2rem;
`;
const AboutHeader = styled.div`
  font-family: var(--font-headers);
  font-size: 2rem;
  margin-bottom: 30px;
`;
const SmallHeader = styled.div`
  font-size: 1rem;
`;
const Options = styled.input`
  text-align: center;
  border: 2px solid var(--color-lightGrey);
  background-color: var(--color-lightGrey);
  border-radius: 5px;

  ::placeholder {
    color: var(--color-darkGrey);
  }
`;
const TimeOptions = styled.input`
  text-align: center;
  border: 2px solid var(--color-lightGrey);
  background-color: var(--color-lightGrey);
  border-radius: 5px;

  ::placeholder {
    color: var(--color-darkGrey);
  }
`;
const CityPostalCode = styled.div`
  display: flex;
`;
const Button = styled.button`
  font-size: 1rem;
  font-family: var(--font);
  background-color: var(--color-darkGrey);
  border: none;
  border-radius: 2px;
  margin-left: 5px;
  cursor: pointer;
`;
const Submit = styled.button`
  font-size: 1rem;
  font-family: var(--font);
  background-color: var(--color-darkGrey);
  border: none;
  border-radius: 4px;
  margin-left: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;
const SubmitReset = styled.div`
  display: flex;
  padding: 0 150px;
  justify-content: space-around;
`;
const PhotoInsert = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const HorizontalImageBox = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Spin = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(360deg);}
`;

const Spinner = styled.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Spin} 2s infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
`;
export default DesignerProfile;
