
import { Outlet } from "react-router-dom";
import { Navbarhead } from "../components/Navbarhead";


function Home() {
  return (
    <>
      <Navbarhead />
      <Outlet />
    </>
  );
}

export default Home;
