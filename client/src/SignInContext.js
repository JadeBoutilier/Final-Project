import { createContext, useState } from "react";

export const SignInContext = createContext();

export const SignInProvider = ({ children }) => {
  const [userSignedIn, setUserSignedIn] = useState(false, "signed-in");
  const [designerSignedIn, setDesignerSignedIn] = useState(false, "signed-in");


  const userSignInVerification = (userEmail, userPassword) => {
   
    return fetch("/sign-in", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: userEmail,
        userPassword: userPassword,
      }),
    })
      .then((res) => res.json())
      .then((usersData) => {
        console.log(usersData);
        if (usersData.status === 200) {
          setUserSignedIn(usersData.data, "signed-in");  
          return true;
        } else if (usersData.status === 400) {
          console.log("User unknown. Please try again.");
          return false;
        }
      });
  };

  const designerSignInVerification = (designerEmail, designerPassword) => {
  return fetch("/sign-in", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      designerEmail: designerEmail,
      designerPassword: designerPassword,
    }),
  })
    .then((res) => res.json())
    .then((designersData) => {
      // console.log(designersData);
      if (designersData.status === 200) {
        setDesignerSignedIn(designersData.data, "signed-in");
        
        return true;
      } else if (designersData.status === 400) {
        console.log("Designer unknown. Please try again.");
        return false;
      }
    });
};

  return (
    <SignInContext.Provider value={{ userSignInVerification, designerSignInVerification, userSignedIn, setUserSignedIn, designerSignedIn, setDesignerSignedIn }}>
      {children}
    </SignInContext.Provider>
  );
};
