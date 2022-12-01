import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import { useAuth0 } from "@auth0/auth0-react";

const ImageUpload = ( /*{images, setImages}*/ ) => {
//   const { user, isAuthenticated, isLoading } = useAuth0();
const [images, setImages]=useState([])
  const [imagesToRemove, setImagesToRemove] = useState(null);

  const handleRemoveImg = (imgObj) => {
    setImagesToRemove(imgObj.public_id);
    // axios.delete(`http://loaclhost:8000/${imgObj.public_id}`).then(()=> {
        setImagesToRemove(null)
        setImages((prev) => prev.filter((img)=> img.public_id !== imgObj.public_id));
    // }).catch((e) => console.log(e))
  };

  const handleOpenWidget = (e) => {
    e.preventDefault();
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dkgb25uho",
        uploadPreset: "zvdqjkzu",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info, public_id: result.info.public_id },
          ]);
          console.log("done! here is the image info: ", result.info);
        }
      }
    );
    myWidget.open();
  };
//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }
  return (
    <div>
      <Container>
       
        <div className="images-preview-container">
          {images.map((image) => {
            return (
              <ImageRemove>
                <Image src={image.url.url} />
                {imagesToRemove != image.public_id && <RemoveButton onClick={() => handleRemoveImg(image)}>Remove</RemoveButton>}
              </ImageRemove>
            );
          })}
        </div>
        <Button
          id="upload-widget"
          className="cloudinary-button"
          onClick={(e) => handleOpenWidget(e)}
        >
          Upload Image
        </Button>
      </Container>
    </div>
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Button= styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--color-grey);
  color: var(--color-darkGrey);
  font-size: 1rem;
  border: 1px solid var(--color-darkGrey);
  width: fit-content;
  padding: 2px 5px;
  &:hover {
    box-shadow: none;
  }
`
const RemoveButton=styled.button`
cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0 0 1px 0px;
  margin-left: 10px;
  line-height: 1;
  margin-top: 2px;
  color: var(--color-darkGrey);
  &:hover {
    border-bottom: 1px solid var(--color-darkGrey);
    padding: 0 
  }
`
const Image =styled.img`
  width: 100%;
`
const ImageRemove =styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`
export default ImageUpload;