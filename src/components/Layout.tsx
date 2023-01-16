import { ReactFC } from "../types/types";
import Footer from "./Footer/Footer";
import Navigation from "./navigation/Navigation";

const Layout: ReactFC = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
