import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}

                    <Outlet />


                </div>
                <div class="drawer-side border-r-[1px] ">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li> <NavLink to={'myProfile'} > My Profile </NavLink> </li>
                        <li> <NavLink to={'myOrders'} > MyOrders </NavLink> </li>
                        <li> <NavLink to={'review'} > Review </NavLink> </li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;