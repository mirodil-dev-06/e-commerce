import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Category from "./category/Category";
import Contact from "./contact/Contact";
import Delivery from "./delivery/Delivery";
import Guarantee from "./guarantee/Guarantee";
import MainCategory from "./main-category/MainCategory";
import Admin from "./admin/Admin";
import Private from "./private/Private";
import Login from './login/Login'
import ProductView from "./product-view/ProductView";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category" element={<Category />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/guarantee" element={<Guarantee />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Private/>}>
        <Route path="/admin" element={<Admin/>}>
            
        </Route>
      </Route>
      <Route path="/maincategory/:categoryname" element={<MainCategory />} />
      <Route path="/product-vied/:id" element={<ProductView/>}/>
    </Routes>
  );
};

export default AllRoutes;
