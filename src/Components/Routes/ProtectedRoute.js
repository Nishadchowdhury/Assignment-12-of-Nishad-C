import UpdateProfile from "../Authentication/UpdateProfile";
import AddReview from "../Dashboard/AddReview";
import Dashboard from "../Dashboard/Dashboard";
import MyProfile from "../Dashboard/MyProfile";
import UserOrders from "../Dashboard/UserOrders";
import PurchasePage from "../PurchasePage/PurchasePage";

export const ProtectedRoute = [
    { name: 'home', path: '/order/:id', Component: PurchasePage },
    { name: 'updateProfile', path: '/updateProfile', Component: UpdateProfile },
    { name: 'userOrder', path: '/Dashboard', Component: Dashboard },
]

export const DashboardNested = [
    { name: 'home', path: 'myOrders', Component: UserOrders },
    { name: 'home', path: 'review', Component: AddReview },
    { name: 'home', path: 'myProfile', Component: MyProfile },
]