import { useContext } from "react";
import { SignInContext } from "./SignInContext";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  firstName: yup.string().required(),
  brand: yup.string().required(),
  _id: yup.string().required(), 
  designerEmail: yup.string().email().required(),
  designerPassword: yup.string().min(4).max(10).required(),
  designerConfirmPassword: yup.string().oneOf([yup.ref("designerPassword"), null]),
  category: yup.string().required(),
  address: yup.string().required(),
  postalCode: yup.string().required(),
  website: yup.string().required(),
  instagram: yup.string().required(),
  phoneNumber: yup.string().required(),
  tagLine: yup.string().required(),
  aboutSection1: yup.string().required(),
  aboutSection2: yup.string().required(),
  services: yup.string().required(),
  openingHours: yup.string().required(),
  SharesStudioWith: yup.string().required(),
})

const DesignerAccount = () => {
    const {designerSignedIn} = useContext(SignInContext)

const {register, handleSubmit, errors} =useForm({resolver: yupResolver(schema)})

const submitForm = (data) => {
console.log(data)
//CREATE FETCH HERE
}
   
    return ( 
      <Wrapper>
        <div>Create / Edit Brand Info</div>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Label for="firstName">Name:</Label>
        <input type="text" name="firstName" placeholder="First Name" ref={register}/>
        <div>{errors.firstName?.message}</div>

        <Label for="brand">Brand Name:</Label>
        <input type="text" name="brand" placeholder="Brand Name" ref={register}/>
        <div>{errors.brand?.message}</div>

        <Label for="_id">Brand Id:</Label>
        <input type="text" name="_id" placeholder="Brand Name" ref={register}/>
        <div>{errors._id?.message}</div>

        <Label for="designerEmail">Brand Id:</Label>
        <input type="email" name="designerEmail" placeholder="Email" ref={register}/>
        <div>{errors.designerEmail?.message}</div>

        <Label for="designerPassword">Brand Id:</Label>
        <input type="password" name="designerPassword" placeholder="Password" ref={register}/>
        <div>{errors.designerPassword?.message}</div>

        <Label for="designerConfirmPassword">Brand Id:</Label>
        <input type="password" name="designerConfirmPassword" placeholder="Confirm password" ref={register}/>
        <div>{errors.designerConfirmPassword && "Passwords do not match"}</div>

        <Label for="category">Category</Label>
        <input type="checkbox" name="category" ref={register}/>
        <div>{errors.category?.message}</div>

        <Label for="address">Studio Address:</Label>
        <input type="text" name="address" placeholder="Address" ref={register}/>
        <div>{errors.address?.message}</div>

        <Label for="postalCode">Studio Postal Code:</Label>
        <input type="text" name="postalCode" placeholder="Postal Code" ref={register}/>
        <div>{errors.postalCode?.message}</div>

        <Label for="website">Website:</Label>
        <input type="text" name="website" placeholder="Website" ref={register}/>
        <div>{errors.website?.message}</div>

        <Label for="instagram">Instagram:</Label>
        <input type="text" name="instagram" placeholder="Instagram" ref={register}/>
        <div>{errors.instagram?.message}</div>

        <Label for="phoneNumber">Phone Number:</Label>
        <input type="tel" name="phoneNumber" placeholder="Phone Number" ref={register}/>
        <div>{errors.phoneNumber?.message}</div>

        <Label for="tagLine">Brand Tag Line:</Label>
        <input type="textarea" name="tagLine" placeholder="Tag Line" ref={register}/>
        <div>{errors.tagLine?.message}</div>

        <Label for="aboutSection1">About Section (Paragraph one):</Label>
        <input type="textarea" name="aboutSection1" placeholder="About paragraph part 1" ref={register}/>
        <div>{errors.aboutSection1?.message}</div>

        <Label for="aboutSection2">About Section (Paragraph two):</Label>
        <input type="textarea" name="aboutSection2" placeholder="About paragraph part 2" ref={register}/>
        <div>{errors.aboutSection2?.message}</div>

        <Label for="services">Services:</Label>
        <input type="checkbox" name="services"/>
        <div>{errors.services?.message}</div>

        <Label for="openingHours">Opening Hours:</Label>
        <input type="textarea" name="openingHours" placeholder="Opening Days & Times" ref={register}/>
        <div>{errors.openingHours?.message}</div>

        <Label for="SharesStudioWith">Shares Studio With:</Label>
        <input type="textarea" name="SharesStudioWith" placeholder="Brand Name" ref={register}></input>
        <div>{errors.SharesStudioWith?.message}</div>
        
        <button>Submit</button>
      </Form>
      </Wrapper>
     );
}
 const Wrapper = styled.div`
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-family: var(--font);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  color: var(--color-darkGrey);
  font-size: 1rem;
`
 
export default DesignerAccount;