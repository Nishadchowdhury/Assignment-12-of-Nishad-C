import { NavLink } from "react-router-dom";
import lightLogo from "../../Assets/SiteLogoGif/Laparts.com Dark.gif"

const Navbar = ({ children }) => {
    return (
        <div class="drawer drawer-end ">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar bg-base-300 ">
                    <div class="flex-1 px-2 mx-2 h-16 "><img className="h-full " src={lightLogo} alt="" /></div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <li className='border-[1px] border-primary ml-2 rounded-lg'>
                                <NavLink to='/' className='rounded-lg ' >Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 pt-2 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}

                    <div className='flex justify-end border-b-[1px] pb-2 '>
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </label>
                    </div>
                    <li className='mt-2' >
                        <NavLink to='/'>Home</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;