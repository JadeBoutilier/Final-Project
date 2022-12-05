import { createContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import * as FontAwesome from "react-icons/fa";

export const DesignersContext = createContext();

// CONTEXT to provide all product metadata (item  & company information)
export const DesignersProvider = ({ children }) => {

  const [designers, setDesigners] = useState();

  //fetching designer info
  useEffect(() => {
    fetch(`/designers`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error(data.message);
        } else {
          setDesigners(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!designers) {
    return <Spinner>
    <FontAwesome.FaSpinner />
  </Spinner>;
  }

    return (
        <DesignersContext.Provider value={{designers}}>
            {children}
        </DesignersContext.Provider>
    )
}
const Spin = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(360deg);}
`;

const Spinner = styled.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Spin} 1s infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
`;