import AddaProduct from "../Admin/AddaProduct";
import MakeAnAdmin from "../Admin/MakeAnAdmin";
import ManageAllOrders from "../Admin/ManageAllOrders";
import ManageProducts from "../Admin/ManageProducts";

export const AdminRouts = [
    { name: 'home', path: 'AddaProduct', Component: AddaProduct },
    { name: 'home', path: 'MakeAnAdmin', Component: MakeAnAdmin },
    { name: 'home', path: 'ManageProducts', Component: ManageProducts },
    { name: 'home', path: 'ManageAllOrders', Component: ManageAllOrders },
]