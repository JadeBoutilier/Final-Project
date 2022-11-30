import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GoogleMaps from "./GoogleMaps";
import { useNavigate } from "react-router-dom";


const DesignerProfile = () => {
  const navigate = useNavigate()  
  const id = useParams().id;


  const [designer, setDesigner] = useState();
  const [designerFormData, setDesignerFormData] = useState({});

  const handleChange = (key, value) => {
    setDesignerFormData({
      ...designerFormData,
      [key]: value,
    });
  };

  const handleReset = (e) => {
    e.preventDefault()
    setDesignerFormData("")
  }

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
  
const formSubmit = (e) => {
    e.preventDefault();

    fetch("/add-designer", {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({newDesigner : designerFormData})
    })
    .then(res => res.json())
    .then((data) => {
        if(data.status === 400){
            throw new Error(data.message);
        } else {
            navigate(`/designer/${designerFormData._id}`);
        }
    })
    .catch(error => window.alert(error));
  }
   

  if (!designer) {
    return <div>Loading...</div>;
  }
  console.log(designer);
  return (
    <Wrapper onSubmit={(e) => formSubmit(e)} onReset={handleReset}>
      <BrandNameSection>
        <BrandNameCategory>
        <BrandName id="brandName" type="text" placeholder={designer.brand}/>
          <Category id="category" onChange={(ev) => handleChange(ev.target.id, ev.target.value)}>
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
        <VerticalPic
          src={designer.brandPic2}
          alt="Designer promotion material"
        />
        <NameTagLine id="NameTagLine">
        <TagLine id="tagline"  wrap="hard">{designer.tagLine}</TagLine>
          <About1 id="about1" wrap="hard">{designer.aboutSection1}</About1>
        </NameTagLine>
      </BrandIntro>
      <AboutSection>
        <AboutHeader>
          <div>About</div>
          <Underline></Underline>
        </AboutHeader>
        <AboutBrand id="aboutBrand">
          <HeaderInfo>
            <About2 id="about2" wrap="hard">{designer.aboutSection2}</About2>
          </HeaderInfo>
          <ContactBrand>
            <Portrait src={designer.designerPhoto} alt="Designer portrait" />
            <DesignerData>
                <Contact>
               <div>Owner/ Founder </div>
                <Underline></Underline>
               <ContactInput id="firstName" type="text" placeholder={designer.firstName}/>
               </Contact>
              <Contact>
                <div>Contact</div>
                <Underline></Underline>
                {/* <ExternalLink
                  href={`https://${designer.website}`}
                  target="_blank"
                > */}
                  <ContactInput id="website" type="text" placeholder={designer.website}/>
                {/* </ExternalLink> */}
                {/* <ExternalLink */}
                  {/* href={`https://instagram.com/${designer.instagram}`}
                  target="_blank"
                > */}
                  <ContactInput id="instagram" type="text" placeholder={designer.instagram}/>
                {/* </ExternalLink> */}
                <ContactInput id="designerEmail" type="text" placeholder={designer.designerEmail}/>
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
            <BoutiquePic src={designer.boutiquePic} alt="Designer boutique" />

            <BoutiqueData2>
              <Info>
                <SmallHeader>Open for walk-ins:</SmallHeader>
                <Italic>
                  {designer.openingHours.map((dayTime, index) => {
                    return <TimeOptions key={index} id="dayTime" type="text" placeholder={dayTime}/>;
                  })}
                  <Button>Add</Button>
                </Italic>
              </Info>
              <Underline></Underline>
              <Info>
                <SmallHeader>Services:</SmallHeader>
                <Italic>
                  {designer.services.map((service, index) => {
                    return <Options key={index}id="service" type="text" placeholder={service}/>;
                  })}
                  <Button>Add</Button>
                </Italic>
              </Info>
              <Underline></Underline>
              <Info>
                <SmallHeader>Studio Mates:</SmallHeader>
                <Italic>
                  {designer.sharesStudioWith.map((studioMate, index) => {
                    return <Options key={index} id="service" type="text" placeholder={studioMate}/>;
                  })}
                  <Button>Add</Button>
                </Italic>
              </Info>
              <Underline></Underline>
              <Location>
                <LogoSection>
                  <Logo src={designer.logo} alt="Designer Logo" />
                </LogoSection>
                <Google>
                  <GoogleMaps />
                </Google>
                <Input id="street address" type="text" placeholder={designer.address}/>
                <CityPostalCode>
                <Input id="city" type="text" placeholder={designer.city + ","}/>
                <Input id="postalCode" type="test" placeholder={designer.postalCode}/>
                </CityPostalCode>
              </Location>
            </BoutiqueData2>
          </AboutBoutique>
        </BoutiqueData>
      </BoutiqueInfo>
      <Underline></Underline>
      <HorizontalPic
        src={designer.brandPic1}
        alt="Designer promotion material"
      />
      <SubmitReset>
      <Reset>Reset Form</Reset>
      <Submit>Submit</Submit>
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
`;
const Category = styled.select`
  font-style: italic;
  font-size: 1.5rem;
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
  width:100%;
`;
const About2 = styled.textarea`
  font-size: 1.2rem;
  text-align: left;
  width: 100%;
  height: 300px;
  font-family: var(--font);
  resize: none;
`;
const Portrait = styled.img`
  max-height: 16rem;
  margin: 0 15px 0 30px;
`;
const Input = styled.input`
  font-style: italic;
  font-size: 1rem;
  margin-left: 5px;
  margin: 1px 0;
  text-align: center;
  width: 100%;
`;
const ContactInput = styled.input`
  font-style: italic;
  font-size: 1rem;
  margin-left: 5px;
  margin: 1px 0;
  text-align: center;
  `
const Italic = styled.div`/////////DELETE AFTER
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
const ExternalLink = styled.a`
  text-decoration: none;
  color: var(--color-darkGrey);
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
const BoutiquePic = styled.img`
  width: 40%;
  object-fit: contain;
`;
const HorizontalPic = styled.img`
  width: 100%;
  margin: 30px 0;
`;
const VerticalPic = styled.img`
  width: 40%;
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
const Logo = styled.img`
  max-width: 20%;
  display: flex;
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
text-align:center;
`;
const TimeOptions = styled.input`
text-align:center;
`;
const CityPostalCode=styled.div`
display: flex;
`
const Button=styled.button`
font-size: 1rem;
font-family: var(--font);
background-color: var(--color-darkGrey);
border: none;
border-radius: 2px;
margin-left: 5px;
cursor: pointer;
`
const Submit=styled.button`
font-size: 1rem;
font-family: var(--font);
background-color: var(--color-darkGrey);
border: none;
border-radius: 4px;
margin-left: 5px;
padding:10px 20px;
cursor: pointer;
`
const Reset =styled.button`
font-size: 1rem;
font-family: var(--font);
background-color: var(--color-darkGrey);
border: none;
border-radius: 4px;
margin-left: 5px;
padding:10px 20px;
cursor: pointer;
`
const SubmitReset=styled.div`
display: flex;
padding: 0 150px;
justify-content: space-around;
`
export default DesignerProfile;

    // "openingHours": [{"Day":[ {"Thursday": "Thursday"}]}, [{"11 am": "11 am"}, {"7 pm": "7 pm"}]],


