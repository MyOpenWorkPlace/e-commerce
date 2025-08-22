import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router";
import icon from "../assets/images/icon.png";

function SidebarNav({ setState }: { setState: Function }) {
  return (
    <div className="absolute left-0 top-0">
      <div
        className="w-dvw h-dvh fixed left-0 top-0 z-1"
        onClick={() => {
          setState(false);
        }}
      ></div>
      <Sidebar>
        <Menu
          className="bg-gray-100 h-dvh pt-3 z-2"
          onClick={() => {
            setState(false);
          }}
        >
          <img className="w-20 rounded-2xl ml-3" src={icon} alt="" />
          <MenuItem component={<Link to="" />}>Home</MenuItem>
          <MenuItem component={<Link to="shop" />}>Shop</MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidebarNav;
