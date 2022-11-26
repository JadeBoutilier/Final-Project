import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Categories = () => {

// const navigate = useNavigate()
// // fetch all designers / sort them into their categories
//   useEffect(() => {
//     fetch(`/designers`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 400 || data.status === 500) {
//           throw new Error(data.message);
//         } else {
//           setSelectedCategory(data.dat.category);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

  return (
  <Wrapper>
    <div></div>
    <div></div>
    <div></div>
  </Wrapper>);
};

const Wrapper = styled.div`
  background-color: var(--color-golden-yellow);
  color: var(--color-burnt-red);
`;
export default Categories;
