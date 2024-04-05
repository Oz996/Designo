import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container w-screen h-screen pt-24 sm:pt-32">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
