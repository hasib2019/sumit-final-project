/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Login from '../../components/login/Login'

const AdminLogin = () => {
    const userType = 'Admin'
    return (
        <Login {...{userType}}/>
    )
}

export default AdminLogin