import { NavLink } from "react-router-dom";

const NavItem = ({ route }) => {
  return (
    <li className="">
      <NavLink
        to={route.path}
        className={({ isActive }) =>
          isActive
            ? "text-green-500 border-0 md:border-2 md:border-green-500 md:px-3 md:py-2 rounded-md font-semibold"
            : "md:px-3 md:py-2 hover:bg-green-100 rounded-md hover:text-green-500 transition duration-300"
        }
      >
        {route.name}
      </NavLink>
    </li>
  );
};
export default NavItem;
