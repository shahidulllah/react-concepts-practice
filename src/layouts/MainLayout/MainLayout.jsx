import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Title from "../../shared/Title";
import Footer from "../../pages/home/Footer";

function MainLayout() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
