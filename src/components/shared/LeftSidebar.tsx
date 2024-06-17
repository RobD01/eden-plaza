import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebarLinks, plaza } from "@/constants";
import { INavLink } from "@/types";

const LeftSidebar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-4">
        <Link
          to="/"
          className="text-lg rounded-xl  bg-amber-100 px-2 text-stone-600 py-2 px-5 shadow-md mx-auto"
        >
          {plaza.name}
        </Link>

        <ul className="flex flex-col gap-1">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname == link.route;

            return (
              <li
                className={`leftsidebar-link group ${
                  isActive && "leftsidebar-link-active"
                }`}
                key={link.label}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={` ${isActive && ""}`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default LeftSidebar;
