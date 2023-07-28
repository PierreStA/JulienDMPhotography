import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userCurrentContext } from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PicturesList from "./pages/PicturesList";
import SignUp from "./pages/SignUp";
// import Price from "./pages/Price";
import Faq from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AboutMe from "./pages/AboutMe";

function App() {
  const { userRole } = userCurrentContext();
  console.log(userRole);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picturelist" element={<PicturesList />} />
        <Route path="/about-me" element={<AboutMe />} />
        {/* <Route path="/price" element={<Price />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          element={
            <ProtectedRoute
              isAllowed={userRole && userRole.roles.includes("admin")}
            />
          }
        >
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
