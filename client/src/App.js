import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Header from "./Header";
import Home from "./Home";
import SignIn from "./SignIn";
import DesignerProfile from "./DesignerProfile";
import Categories from "./Categories";


const App = () => {

  return (
    <BrowserRouter>
    <GlobalStyles />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/designer:id" element={<DesignerProfile/>} />
      <Route path="/categories" element={<Categories />} />
      <Route path="" element={<h1>404: Oops!</h1>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
