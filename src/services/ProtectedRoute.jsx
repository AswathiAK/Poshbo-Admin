import React from 'react'
import Cookies from "js-cookie";
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const auth = Cookies.get('adminToken'); console.log(auth);
  return auth ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoute
