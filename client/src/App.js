import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { useContext, useState } from "react";

import Header from "./Header";
import Home from "./Home";
import SignIn from "./SignIn";
import DesignerProfile from "./DesignerProfile";
import Categories from "./Categories";
import Brands from "./Brands";
import UserProfile from "./UserProfile";
import DesignerAccountNew from "./DesignerAccountNew";
import { SignInContext } from "./SignInContext";

const App = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [designerEmail, setDesignerEmail] = useState("");
  const [designerPassword, setDesignerPassword] = useState("");

  const {userSignedIn, designerSignedIn} =useContext(SignInContext)

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header
        setUserEmail={setUserEmail}
        setUserPassword={setUserPassword}
        setDesignerEmail={setDesignerEmail}
        setDesignerPassword={setDesignerPassword}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in"
          element={
            <SignIn
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              userPassword={userPassword}
              setUserPassword={setUserPassword}
              designerEmail={designerEmail}
              setDesignerEmail={setDesignerEmail}
              designerPassword={designerPassword}
              setDesignerPassword={setDesignerPassword}
            />
          }
        />
        {userSignedIn? (
          <>
        <Route path="/designer/:id" element={<DesignerProfile />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="" element={<h1>404: Oops!</h1>} />
        </>
        ): (
        <>                                     
        <Route path="/designer/:id" element={<DesignerProfile />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
  
        <Route path="" element={<h1>404: Oops!</h1>} />
        </>)}
        {designerSignedIn? (
          <>
        <Route path="/designer/:id" element={<DesignerProfile />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/designer/account/:id" element={<DesignerAccountNew />} />
        <Route path="" element={<h1>404: Oops!</h1>} />
        </>
        ): (<>
        <Route path="/designer/:id" element={<DesignerProfile />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="" element={<h1>404: Oops!</h1>} />
        </>)}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
