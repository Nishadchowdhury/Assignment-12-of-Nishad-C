import Blogs from "../About/Blogs";
import AllProducts from "../AllProducts/AllProducts";
import CreateUser from "../Authentication/CreateUser";
import Login from "../Authentication/Login";
import Home from "../Home/Home";
import NotFound from "../Shared/NotFoundPage/NotFound";

export const PublicRouts = [
    { name: 'home', path: '/Blogs', Component: Blogs },
    { name: 'home', path: '/', Component: Home },
    { name: 'allProducts', path: '/allProducts', Component: AllProducts },
    { name: 'Login', path: '/login', Component: Login },
    { name: 'createAccount', path: '/createAcc', Component: CreateUser },
    { name: 'Notfound', path: '/*', Component: NotFound },
]