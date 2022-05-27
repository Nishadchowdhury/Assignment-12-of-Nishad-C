import { signOut } from "firebase/auth";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { userContextFirebase } from "../../../App";
import lightLogo from "../../../Assets/SiteLogoGif/Laparts.com Dark.gif"
import auth from "../../../firebase.init";

const Navbar = ({ children }) => {
    const [user, loading, error] = useContext(userContextFirebase);

    const data = useContext(userContextFirebase)

    console.log('120', data);

    const location = useLocation().pathname;

    console.log(location);


    const handleSignOut = () => {
        localStorage.removeItem("accessToken");
        signOut(auth)
    }

    return (
        <div className="drawer drawer-end  ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300 ">
                    <div className="flex-1  h-16 rounded-2xl "><img className="h-full   rounded-2xl" src={lightLogo} alt="" />

                    </div>

                    <div className="flex-none lg:hidden">
                        {location.includes('/dashboard') && <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg></label>}
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li className='border-[1px] border-primary ml-2 rounded-lg'>
                                <NavLink to='/' className='rounded-lg ' >Home</NavLink>
                            </li>



                            {user && <li className='border-[1px] border-primary ml-2 rounded-lg'>
                                <NavLink to='/dashboard/myProfile' className={`rounded-lg ${location.includes('dashboard') && 'btn-primary text-white '}  `}  >Dashboard</NavLink>
                            </li>}
                            <li className='border-[1px] border-primary ml-2 rounded-lg'>
                                <NavLink to='/Blogs' className='rounded-lg ' >Blogs</NavLink>
                            </li>

                            <li className='border-[1px] border-primary ml-2 rounded-lg'>
                                <NavLink to='/myPortfolio' className='rounded-lg ' >My Portfolio</NavLink>
                            </li>
                            {user ? <li className='border-[1px] border-primary ml-2 rounded-lg'>
                                <button className='rounded-lg ' onClick={handleSignOut}  >Log out</button>
                            </li> : <li className='border-[1px] border-primary ml-2 rounded-lg'>
                                <NavLink to='/login' className='rounded-lg ' >Login</NavLink>
                            </li>}

                            <div class={`avatar ml-2 ${user?.emailVerified && "online"}`}>
                                <div class="  w-12 border-2  rounded-full">
                                    <img src={user?.photoURL || 'https://i.ibb.co/NZGnqZK/user-not-found.webp'} alt='ok' />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4  overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}

                    <div className='flex justify-end border-b-[1px] pb-2 '>
                        <div class={`avatar mr-2 ${user?.emailVerified && "online"}`}>
                            <div class="  w-12 border-2  rounded-full">
                                <img src={user?.photoURL || 'https://i.ibb.co/NZGnqZK/user-not-found.webp'} alt='ok' />
                            </div>

                        </div>
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </label>
                    </div>

                    <li className='mt-2 ' >
                        <NavLink to='/' className='border-[1px] border-primary ' >Home</NavLink>
                    </li>


                    {user && <li className='mt-2 '>
                        <NavLink to='/dashboard/myProfile' htmlFor="my-drawer-3" className={`border-[1px] border-primary ${location.includes('dashboard') && 'btn-primary text-white '} `} >Dashboard</NavLink>
                    </li>}

                    <li className='mt-2  ' >
                        <NavLink to='/Blogs' className='border-[1px] border-primary' >Blogs</NavLink>
                    </li>

                    <li className='mt-2  ' >
                        <NavLink to='/myPortfolio' className='border-[1px] border-primary' >My Portfolio</NavLink>
                    </li>


                    {user ? <li className='mt-2'>
                        <button className='mt-2 border-[1px] border-primary ' onClick={handleSignOut} >Log out</button>
                    </li> : <li className='mt-2'>
                        <NavLink to='/login' className='mt-2 border-[1px] border-primary ' >Login</NavLink>
                    </li>}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;