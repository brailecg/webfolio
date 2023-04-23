import Footer from "../utilities/Footer";
import Nav from "../utilities/Nav";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Nav />
      <main className="bg-bg-primary px-6 sm:px-20">
        <Outlet />
      </main>
      <div className="border border-bg-secondary bg-bg-secondary"></div>
      <Footer />
    </div>
  );
};

export default Main;
