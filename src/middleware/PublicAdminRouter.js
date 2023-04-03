import React from 'react'
import adminUserAuth from '../helper/adminUserAuth'
import { Navigate } from 'react-router-dom';

const PublicAdminRouter = ({children}) => {
    const isLoggedIn = adminUserAuth();
  return !isLoggedIn ? children : <Navigate to={"/admin/dashboard"} />
}

export default PublicAdminRouter