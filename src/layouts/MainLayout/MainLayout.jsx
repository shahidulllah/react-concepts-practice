import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Title from "../../shared/Title";

function MainLayout() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet/>
      </div>
    </>
  );
}

export default MainLayout;
