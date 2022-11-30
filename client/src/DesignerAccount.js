import { useContext, useState } from "react";
import { SignInContext } from "./SignInContext";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom";

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
    const [designerData, setDesignerData] = useState();
    const navigate = useNavigate()

const {register, handleSubmit, errors} =useForm({resolver: yupResolver(schema)})

const submitForm = (e) => {
  e.preventDefault();

    fetch("/add-designer", {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({newDesigner : designerData})
    })
    .then(res => res.json())
    .then((data) => {
        if(data.status === 400){
            throw new Error(data.message);
        } else {
            navigate(`/designer/${designerData._id}`);
        }
    })
    .catch(error => window.alert(error));
  }
   
    return ( 
      <Wrapper>
        <div>Create / Edit Brand Info</div>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Label htmlfor="firstName">Name:</Label>
        <input type="text" name="firstName" placeholder="First Name" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.firstName?.message}</div>

        <Label htmlfor="brand">Brand Name:</Label>
        <input type="text" name="brand" placeholder="Brand Name" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.brand?.message}</div>

        <Label htmlfor="_id">Brand Id:</Label>
        <input type="text" name="_id" placeholder="Brand Name" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?._id?.message}</div>

        <Label htmlfor="designerEmail">Email:</Label>
        <input type="email" name="designerEmail" placeholder="Email" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.designerEmail?.message}</div>

        <Label htmlfor="designerPassword">Password:</Label>
        <input type="password" name="designerPassword" placeholder="Password" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.designerPassword?.message}</div>

        <Label htmlfor="designerConfirmPassword">Confirm Password:</Label>
        <input type="password" name="designerConfirmPassword" placeholder="Confirm password" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.designerConfirmPassword && "Passwords do not match"}</div>

        <Label htmlfor="category">Category</Label>
        <input type="text" name="category" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.category?.message}</div>

        <Label htmlfor="address">Studio Address:</Label>
        <input type="text" name="address" placeholder="Address" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.address?.message}</div>

        <Label htmlfor="postalCode">Studio Postal Code:</Label>
        <input type="text" name="postalCode" placeholder="Postal Code" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.postalCode?.message}</div>

        <Label htmlfor="website">Website:</Label>
        <input type="text" name="website" placeholder="Website" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.website?.message}</div>

        <Label htmlfor="instagram">Instagram:</Label>
        <input type="text" name="instagram" placeholder="Instagram" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.instagram?.message}</div>

        <Label htmlfor="phoneNumber">Phone Number:</Label>
        <input type="tel" name="phoneNumber" placeholder="Phone Number" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.phoneNumber?.message}</div>

        <Label htmlfor="tagLine">Brand Tag Line:</Label>
        <input type="textarea" name="tagLine" placeholder="Tag Line" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.tagLine?.message}</div>

        <Label htmlfor="aboutSection1">About Section (Paragraph one):</Label>
        <input type="textarea" name="aboutSection1" placeholder="About paragraph part 1" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.aboutSection1?.message}</div>

        <Label htmlfor="aboutSection2">About Section (Paragraph two):</Label>
        <input type="textarea" name="aboutSection2" placeholder="About paragraph part 2" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.aboutSection2?.message}</div>

        <Label htmlfor="services">Services:</Label>
        <input type="text" name="services" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.services?.message}</div>

        <Label htmlfor="openingHours">Opening Hours:</Label>
        <input type="textarea" name="openingHours" placeholder="Opening Days & Times" {...register("message", {
            required: "Required",
          })}/>
        <div>{errors?.openingHours?.message}</div>

        <Label htmlfor="SharesStudioWith">Shares Studio With:</Label>
        <input type="textarea" name="SharesStudioWith" placeholder="Brand Name" {...register("message", {
            required: "Required",
          })}></input>
        <div>{errors?.SharesStudioWith?.message}</div>
        
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