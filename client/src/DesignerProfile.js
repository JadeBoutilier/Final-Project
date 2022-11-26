import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DesignerProfile = () => {
  const id = useParams().id;

  const [designer, setDesigner] = useState();

  //fetching designer info
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
  }, []);

  if (!designer) {
    return <div>Loading...</div>;
  }
  console.log(designer)
  return (
    <Wrapper>
      <div>{designer.brand}</div>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-golden-yellow);
  color: var(--color-burnt-red);
`;
export default DesignerProfile;
