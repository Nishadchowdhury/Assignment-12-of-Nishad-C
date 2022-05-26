import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { userContextFirebase } from '../../App';
import rootUrl from '../../Hooks/RootUrl';

const Dashboard = () => {

    const location = useLocation().pathname;
    const [user, loading, error] = useContext(userContextFirebase);

    const [dbUser, setDbUser] = useState({})
    useEffect(() => {

        if (user?.email) {
            fetch(`${rootUrl}/user/${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setDbUser(data);
                })
        }

    }, [user, loading])

    console.log(dbUser);

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class={`drawer-content ${!location.includes('/dashboard/myProfile') && ""}`}>
                    {/* <!-- Page content here --> */}

                    <Outlet />

                </div>
                <div class=" drawer-side border-r-[1px] ">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu  p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li> <NavLink to={'myProfile'} > My Profile </NavLink> </li>

                        {dbUser?.role !== 'Admin' && <li> <NavLink to={'myOrders'} > MyOrders </NavLink> </li>}
                        {dbUser?.role !== 'Admin' && <li> <NavLink to={'review'} > Add a Review </NavLink> </li>}

                        {dbUser?.role === 'Admin' && <li> <NavLink to={'myOrders'}> Add a Product </NavLink> </li>}
                        {dbUser?.role === 'Admin' && <li> <NavLink to={'review'} > Manage all Orders </NavLink> </li>}
                        {dbUser?.role === 'Admin' && <li> <NavLink to={'myOrders'}> Make an Admin </NavLink> </li>}
                        {dbUser?.role === 'Admin' && <li> <NavLink to={'review'} > Manage Products </NavLink> </li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;