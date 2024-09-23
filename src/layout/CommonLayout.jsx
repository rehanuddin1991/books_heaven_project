import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Carousel from "../components/shared/Carousel";

export default function CommonLayout() {
  return (
    <>
      <Navbar />
      <Carousel />
      
      <Outlet />
      <Footer />
    </>
  );
}
