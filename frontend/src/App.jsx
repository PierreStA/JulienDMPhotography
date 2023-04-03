import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { UserContextProvider } from "./context/userContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PicturesList from "./pages/PicturesList";
import SignUp from "./pages/SignUp";
import Price from "./pages/Price";
import Faq from "./pages/Faq";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      {/* <UserContextProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picturelist" element={<PicturesList />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/price" element={<Price />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* </UserContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
