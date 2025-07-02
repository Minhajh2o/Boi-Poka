import { NavLink } from "react-router-dom";

const NavItem = ({ route }) => {
  return (
    <li>
      <NavLink to={route.path}>{route.name}</NavLink>
    </li>
  );
};
export default NavItem;