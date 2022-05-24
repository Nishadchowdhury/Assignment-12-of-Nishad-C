import UpdateProfile from "../Authentication/UpdateProfile";
import PurchasePage from "../PurchasePage/PurchasePage";

export const ProtectedRoute = [
    { name: 'home', path: '/order/:id', Component: PurchasePage },
    { name: 'updateProfile', path: '/updateProfile', Component: UpdateProfile },
]