import { Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <section>
      {" "}
      <div className="flex w-full ">
        <div className="w-[17%]  h-screen sticky top-0">
          <SideBar />
        </div>

        <div className="w-[83%] bg-background-color">
          <div className="w-full sticky top-0 z-50 backdrop-blur-lg">
            <Header />
          </div>
          <div className="min-h-screen w-full">
            <Outlet />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
export default MainLayout;
