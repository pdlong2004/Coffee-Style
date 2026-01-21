import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useCartSidebar } from "../../contexts/CartSidebarContext";

export default function Header() {
  const { openCart } = useCartSidebar();
  const [menuActive, setMenuActive] = useState(false);
  const [userMenuActive, setUserMenuActive] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/");
    setUserMenuActive(false);
    setMenuActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuActive(false);
      }
    };
    if (userMenuActive)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenuActive]);

  return (
    <header className="relative p-7 lg:py-6 font-bold text-[12px]">
      <div className="flex justify-between lg:justify-evenly items-center">
        {/* Logo */}
        <NavLink to="/" className="cursor-pointer">
          <img
            src="https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4ae4ecdfb2_CoffeeStyle%20Logo.png"
            width="112"
            alt="CoffeeStyle Logo"
            className="object-contain"
          />
        </NavLink>

        {/* Main Navigation Menu */}
        <ul
          className={`absolute top-full bg-white right-0 left-0 text-center z-20 py-2.5 shadow-xl lg:shadow-none lg:relative lg:flex lg:space-x-8 uppercase font-bold tracking-[2px] transform origin-top transition-transform duration-300 ${
            menuActive ? "scale-y-100" : "scale-y-0"
          } lg:scale-y-100 lg:transition-none`}
        >
          {[
            ["/", "Home"],
            ["/products", "Our Products"],
            ["/blogs", "Blog"],
            ["/about", "About"],
            ["/contact", "Contact"],
          ].map(([path, label]) => (
            <li key={path} className="py-3.75 lg:py-0">
              <NavLink
                to={path}
                onClick={() => setMenuActive(false)}
                className={({ isActive }) =>
                  `top-menu-item ${
                    isActive
                      ? "text-black after:w-full"
                      : "text-gray-500 hover:text-black"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {!isAuthenticated && (
            <div className="sm:hidden border-t border-gray-100 mt-4 py-4 flex flex-col gap-4 items-center">
              <NavLink
                to="/login"
                onClick={() => setMenuActive(false)}
                className="text-gray-500 uppercase px-8 py-3 w-2/3 hover:bg-gray-200"
              >
                Đăng nhập
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setMenuActive(false)}
                className="bg-black text-white px-8 py-3 rounded w-2/3 hover:opacity-70"
              >
                Đăng ký
              </NavLink>
            </div>
          )}
        </ul>

        <div className="flex items-center gap-4 lg:gap-8 text-gray-500">
          <button
            onClick={openCart}
            className="group flex flex-row gap-2 lg:gap-3 cursor-pointer"
          >
            <img
              src="https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a3450ecdfb5_Cart%20Icon.png"
              width="16"
              alt="Cart"
              className="object-cover opacity-60 group-hover:opacity-100"
            />
            <span className="group-hover:text-black">CART</span>
            <span className="h-4.5 w-4.5 text-center leading-4.5 bg-gray-500 rounded-full text-white group-hover:bg-black">
              {isAuthenticated ? totalItems : 0}
            </span>
          </button>

          {isAuthenticated ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuActive(!userMenuActive)}
                className="flex items-center gap-2 hover:text-black"
              >
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-black text-xs">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="hidden lg:inline uppercase tracking-[2px]">
                  {user?.name}
                </span>
              </button>
              {userMenuActive && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg border border-gray-200 z-30">
                  <div className="py-2">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-medium text-black">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-400 font-normal normal-case">
                        {user?.email}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-[11px] hover:bg-gray-100 uppercase tracking-[1px]"
                    >
                      Đăng xuất
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <NavLink
                to="/login"
                className="uppercase tracking-[2px] hover:text-black "
              >
                Đăng nhập
              </NavLink>
              <NavLink
                to="/register"
                className="uppercase tracking-[2px] border-2 border-black px-4 py-2 bg-black text-white hover:opacity-70 transition-all"
              >
                Đăng ký
              </NavLink>
            </div>
          )}

          {/* Mobile Toggle Button */}
          <button
            className="flex lg:hidden cursor-pointer"
            onClick={() => setMenuActive(!menuActive)}
          >
            <img
              src="https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a13f3ecdfa0_Menu%20Icon.png"
              width="20"
              alt="Menu"
              className={menuActive ? "opacity-100" : "opacity-60"}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
