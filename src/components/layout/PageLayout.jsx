import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import WhatsAppButton from "../common/WhatsAppButton";

const PageLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* Home par navbar hero ke upar hai, baaki pages me neeche */}
      <main className={`min-h-screen ${isHome ? "" : "pt-20"}`}>
        {/* key badalne se har naye page par halka fade-in chalta hai */}
        <div key={pathname} className="animate-page-in motion-reduce:animate-none">
          <Outlet />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PageLayout;