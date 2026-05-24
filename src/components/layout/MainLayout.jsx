import { Outlet } from "react-router-dom";
import CursorTrail from "../shared/CursorTrail";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-vanta-black text-white">
      <CursorTrail />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
