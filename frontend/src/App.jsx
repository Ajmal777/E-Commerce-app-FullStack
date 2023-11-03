import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserRegister from "./Pages/Register/UserRegister";
import VendorRegister from "./Pages/Register/VendorRegister";
import UserLogin from "./Pages/Login/UserLogin";
import VendorLogin from "./Pages/Login/VendorLogin";
import CreateProduct from "./Pages/CreateProduct";
import ViewProducts from "./Pages/ViewProducts";
import VendorProducts from "./Pages/VendorProducts";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Register" element={<UserRegister />} />
          <Route path="/Register/Vendor" element={<VendorRegister />} />
          <Route path="/" element={<UserLogin />} />
          <Route path="/Login/Vendor" element={<VendorLogin />} />
          <Route path="/CreateProduct" element={<CreateProduct />} />
          <Route path="/ViewProducts" element={<ViewProducts />} />
          <Route path="/myProducts" element={<VendorProducts />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
