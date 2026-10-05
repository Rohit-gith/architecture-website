import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import WhatsAppButton from "../common/WhatsAppButton";

const PageLayout = () => {
  const isHome = useLocation().pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* Home par navbar hero ke upar hai, baaki pages me neeche */}
      <main className={`min-h-screen ${isHome ? "" : "pt-20"}`}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PageLayout;