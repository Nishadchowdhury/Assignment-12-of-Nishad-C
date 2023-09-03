import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const RequireAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  //console.log(user);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }

  return <Outlet />;
};

export default RequireAuth;
