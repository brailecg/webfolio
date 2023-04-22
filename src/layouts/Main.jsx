import Nav from "../utilities/Nav";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
