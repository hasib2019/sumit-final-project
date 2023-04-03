/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Login from '../components/login/Login'
const StudentLogin = () => {
    const userType = 'User'
    return (
        <Login {...{userType}}/>
    )
}

export default StudentLogin