import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userCurrentContext } from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PicturesList from "./pages/PicturesList";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AboutMe from "./pages/AboutMe";
import PrivacyPolicy from "./pages/privacyPolicy";

function App() {
  const { userRole } = userCurrentContext(); //* recupere le userRole du context

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picturelist" element={<PicturesList />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route //* route protégée, accessible uniquement si le userRole contient "user"
          element={
            <ProtectedRoute
              isAllowed={userRole && userRole.roles.includes("user")}
            />
          }
        >
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route //* route protégée, accessible uniquement si le userRole contient "admin"
          element={
            <ProtectedRoute
              isAllowed={userRole && userRole.roles.includes("admin")}
            />
          }
        >
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
