import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { userContextFirebase } from "../../App";
import rootUrl from "../../Hooks/RootUrl";
import checkAdmin from "../../Hooks/CheckAdmin";

const Dashboard = () => {
  const location = useLocation().pathname;
  const [user, loading] = useContext(userContextFirebase);

  const [dbUser, setDbUser] = useState({});
  useEffect(() => {
    async function getData() {
      let userFromDatabase = await checkAdmin(user?.email);

      if (userFromDatabase) {
        setDbUser(userFromDatabase);
      }
    }
    getData();
  }, [user]);

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

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerBtn}
        />
        <div
          className={`drawer-content ${
            !location.includes("/dashboard/myProfile") && ""
          }`}
        >
          {/* <!-- Page content here --> */}

          <Outlet />
        </div>
        <div className=" drawer-side border-r-[1px] ">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay"
          ></label>
          <ul className="menu  p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li onClick={drawerControl}>
              <NavLink to={"myProfile"}> My Profile </NavLink>
            </li>

            {dbUser?.role !== "Admin" && (
              <li onClick={drawerControl}>
                <NavLink to={"myOrders"}> MyOrders </NavLink>
              </li>
            )}
            {dbUser?.role !== "Admin" && (
              <li onClick={drawerControl}>
                <NavLink to={"review"}> Add a Review </NavLink>
              </li>
            )}

            {dbUser?.role === "Admin" && (
              <li onClick={drawerControl}>
                <NavLink to={"AddaProduct"}>Add a Product</NavLink>
              </li>
            )}
            {dbUser?.role === "Admin" && (
              <li onClick={drawerControl}>
                <NavLink to={"ManageAllOrders"}>
                  Manage all Orders
                </NavLink>
              </li>
            )}
            {dbUser?.role === "Admin" && (
              <li onClick={drawerControl}>
                <NavLink to={"MakeAnAdmin"}>Make an Admin</NavLink>
              </li>
            )}
            {dbUser?.role === "Admin" && (
              <li onClick={drawerControl}>
                <NavLink to={"ManageProducts"}>
                  Manage Products
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
