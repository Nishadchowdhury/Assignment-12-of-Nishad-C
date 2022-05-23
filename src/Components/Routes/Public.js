import AllProducts from "../AllProducts/AllProducts";
import Login from "../Authentication/Login";
import Home from "../Home/Home";
import PurchasePage from "../PurchasePage/PurchasePage";

export const PublicRouts = [
    { name: 'home', path: '/', Component: Home },
    { name: 'allProducts', path: '/allProducts', Component: AllProducts },
    { name: 'order', path: '/order/:id', Component: PurchasePage },
    { name: 'Login', path: '/login', Component: Login },
]