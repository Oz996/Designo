import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useScroll, motion } from "framer-motion";

const Layout = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-peach z-30"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <main className="container pt-24 sm:pt-32">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
