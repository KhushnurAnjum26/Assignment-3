import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md">
      
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold">
        Hero IO
      </NavLink>

      {/* Navbar */}
      <nav className="flex gap-6">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}
        >
          Home
        </NavLink>

        <NavLink 
          to="/apps" 
          className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}
        >
          Apps
        </NavLink>

        <NavLink 
          to="/installation" 
          className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}
        >
          Installation
        </NavLink>
      </nav>

      {/* Contribution Button */}
      <a 
        href="https://github.com/your-username" 
        target="_blank"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Contribution
      </a>

    </header>
  );
}

export default Header;