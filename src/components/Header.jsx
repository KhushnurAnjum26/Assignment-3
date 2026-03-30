import { NavLink } from "react-router-dom";

<NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
  Home
</NavLink>