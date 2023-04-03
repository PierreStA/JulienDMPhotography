import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Panier from "./pages/Panier";
import PicturesList from "./pages/PicturesList";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/picturelist" element={<PicturesList />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
