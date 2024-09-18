import { Outlet } from "react-router-dom";
import { HeaderStyle } from "../Header/HeaderStyle";

function Layout() {
  return (
    <>
      <HeaderStyle />
      <Outlet />
    </>
  );
}

export default Layout;
