import React from 'react';
import { Navigate } from 'react-router-dom';
import useAdminAuth from '../helper/adminUserAuth';

const PrivateAdminRouter = ({ children }) => {
  const isLoggedIn = useAdminAuth();
  return isLoggedIn ? children : <Navigate to={"/"} />
}

export default PrivateAdminRouter