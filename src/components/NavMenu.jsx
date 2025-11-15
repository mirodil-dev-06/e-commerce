import { NavLink } from "react-router-dom";


const NavMenu = () => {
  const navItems = [
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const navItemClasses = "font-[Golos, sans-serif] ";
  const activeLink = "text-[#f6f6f6] font-semibold";
  const inactiveLink = "font-normal text-[#fff]";
  return (
    <div>
      <ul className="flex gap-10">
        {navItems.map((item) => (
          <li key={item.path} className={navItemClasses}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavMenu