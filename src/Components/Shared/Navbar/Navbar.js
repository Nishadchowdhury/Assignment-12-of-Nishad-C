import { signOut } from "firebase/auth";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { userContextFirebase } from "../../../App";
import lightLogo from "../../../Assets/SiteLogoGif/Laparts.com Dark.gif";
import auth from "../../../firebase.init";

const Navbar = ({ children }) => {
  const [user, loading] = useContext(userContextFirebase);

  const userName = user?.displayName;
  const navigate = useNavigate();

  //to control the drawer manually onClick={drawerControl}
  const drawerBtn = useRef(null);
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    if (showDrawer) drawerBtn.current.click();
  }, [showDrawer]);
  const drawerControl = () => {
    setTimeout(() => {
      setShowDrawer(true);
    }, 20);

    setTimeout(() => {
      setShowDrawer(false);
    }, 200);
  };

  const location = useLocation().pathname;

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };

  //with and error or warning for using anchor tag <a> in react
  const redirectToExternalSite = () => {
    if (!drawerControl) drawerControl();

    const externalSiteUrl = "http://nishadchowdhury.netlify.app";
    window.open(externalSiteUrl, "_blank");
  };

  return (
    <div className="drawer drawer-end  ">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}

        <div className="w-full navbar h-14 bg-base-300 ">
          <div className="flex-1 h-16 rounded-2xl ">
            <img
              className="h-full rounded-2xl cursor-pointer"
              src={lightLogo}
              alt=""
              onClick={() => navigate("/")}
            />
          </div>

          <div className="flex-none lg:hidden">
            {location.includes("/dashboard") && (
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            )}
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* desktop Nav */}

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li className="border-[1px] border-primary ml-2 rounded-lg">
                <NavLink to="/" className="rounded-lg ">
                  Home
                </NavLink>
              </li>

              {user && (
                <li className="border-[1px] border-primary ml-2 rounded-lg">
                  <NavLink
                    to="/dashboard/myProfile"
                    className={`rounded-lg ${
                      location.includes("dashboard") &&
                      "btn-primary text-white "
                    }  `}
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li className="border-[1px] border-primary ml-2 rounded-lg">
                <NavLink to="/Blogs" className="rounded-lg ">
                  Blogs
                </NavLink>
              </li>

              <li className="border-[1px] border-primary ml-2 rounded-lg">
                <button
                  onClick={redirectToExternalSite}
                  className="rounded-lg "
                >
                  My Portfolio
                </button>
              </li>
              {user ? (
                <li className="border-[1px] border-primary ml-2 rounded-lg">
                  <button
                    className="rounded-lg "
                    onClick={handleSignOut}
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <li className="border-[1px] border-primary ml-2 rounded-lg">
                  <NavLink to="/login" className="rounded-lg ">
                    Login
                  </NavLink>
                </li>
              )}

              <div
                className={`avatar ml-2 flex items-center justify-center flex-col ${
                  user?.emailVerified && "online"
                }`}
              >
                <div className="  w-[35px] border-2  rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/NZGnqZK/user-not-found.webp"
                    }
                    alt="ok"
                  />
                </div>

                <span className="text-xs text-white ">
                  {userName &&
                    (userName?.length <= 10
                      ? userName
                      : userName?.slice(0, 9) + "..")}
                </span>
              </div>
            </ul>
          </div>
        </div>

        {children}
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          className="drawer-overlay"
          ref={drawerBtn}
        ></label>
        <ul className="menu p-4 pt-2  overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}

          <div className="flex justify-end border-b-[1px] pb-2 ">
            <div
              className={`avatar mr-2 flex-row items-center border rounded-lg border-gray-500 px-2 py-[3px]  ${
                user?.emailVerified && "online"
              }`}
            >
              <span className="text-lg leading-none text-white ">
                {userName &&
                  (userName?.length <= 10
                    ? userName
                    : userName?.slice(0, 9) + "..")}
              </span>

              <div className=" w-12 ml-2 border-2 rounded-full">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/NZGnqZK/user-not-found.webp"
                  }
                  alt="ok"
                />
              </div>
            </div>
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rounded-2xl"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          <li className="mt-2 " onClick={drawerControl}>
            <NavLink to="/" className="border-[1px] border-primary ">
              Home
            </NavLink>
          </li>

          {user && (
            <li className="mt-2 " onClick={drawerControl}>
              <NavLink
                to="/dashboard/myProfile"
                htmlFor="my-drawer-3"
                className={`border-[1px] border-primary ${
                  location.includes("dashboard") &&
                  "btn-primary text-white "
                } `}
              >
                Dashboard
              </NavLink>
            </li>
          )}

          <li className="mt-2  " onClick={drawerControl}>
            <NavLink
              to="/Blogs"
              className="border-[1px] border-primary"
            >
              Blogs
            </NavLink>
          </li>

          <li className="mt-2  " onClick={drawerControl}>
            <button
              onClick={redirectToExternalSite}
              className="border-[1px] border-primary"
            >
              My Portfolio
            </button>
          </li>

          {user ? (
            <li className="mt-2" onClick={drawerControl}>
              <button
                className="mt-2 border-[1px] border-primary "
                onClick={handleSignOut}
              >
                Log out
              </button>
            </li>
          ) : (
            <li className="mt-2" onClick={drawerControl}>
              <NavLink
                to="/login"
                className="mt-2 border-[1px] border-primary "
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
