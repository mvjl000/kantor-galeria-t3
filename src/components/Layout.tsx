import { ReactFC } from "../types/types";
import Navigation from "./navigation/Navigation";

const Layout: ReactFC = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
