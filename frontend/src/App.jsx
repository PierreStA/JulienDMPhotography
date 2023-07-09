import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userCurrentContext } from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PicturesList from "./pages/PicturesList";
import SignUp from "./pages/SignUp";
import Price from "./pages/Price";
import Faq from "./pages/Faq";
import Order from "./pages/Order";
import Admin from "./pages/Admin";

function App() {
  const { userRole } = userCurrentContext();
  console.log(userRole);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picturelist" element={<PicturesList />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/price" element={<Price />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          element={
            <ProtectedRoute
              isAllowed={userRole && userRole.roles.includes("admin")}
            />
          }
        >
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
