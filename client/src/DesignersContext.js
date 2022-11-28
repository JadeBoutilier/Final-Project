import { createContext, useState, useEffect } from "react";

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
    return <div>Loading...</div>;
  }
  console.log(designers)
    return (
        <DesignersContext.Provider value={{designers}}>
            {children}
        </DesignersContext.Provider>
    )
}