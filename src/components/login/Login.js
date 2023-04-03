/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import learningportal from "../../assets/image/learningportal.svg"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLoginMutation } from '../../features/auth/authApi'
import { NotificationManager } from 'react-notifications'

const Login = ({ userType }) => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }
    const [login, {data, isLoading, error}] = useLoginMutation();
    const navigate = useNavigate()

    useEffect(()=>{
        if(error){
            NotificationManager.error(error.data,"",5000)
        }
        if(data?.accessToken && data?.user && data?.user?.role==="admin"){
            NotificationManager.success("Login Success","",5000)
            navigate("/admin/dashboard")
        } else if(data?.accessToken && data?.user && data?.user?.role==="student"){
            NotificationManager.success("Login Success","",5000)
            navigate("/leader-board")
        }
    },[data, error, navigate])

    const handleSubmit = (e)=>{
        e.preventDefault();
        login({
            email: loginData.email,
            password: loginData.password
        })

    }

    return (
        <section className="py-6 bg-primary h-screen grid place-items-center">
            <div className="mx-auto max-w-md px-5 lg:px-0">
                <div>
                    <img className="h-12 mx-auto" src={learningportal} />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                        Sign in to {userType} Account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email"
                                onChange={handleChange} autocomplete="email" required
                                className="login-input rounded-t-md" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" name="password" on type="password"
                                onChange={handleChange} autocomplete="current-password" required
                                className="login-input rounded-b-md" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            {
                                userType == "Admin" && (
                                    <Link to="#" className="font-medium text-violet-600 hover:text-violet-500">
                                        Forgot your password?
                                    </Link>
                                )
                            }

                            {
                                userType == "User" && (
                                    <Link to="/student-registration" className="font-medium text-violet-600 hover:text-violet-500">
                                        Create New Account
                                    </Link>
                                )
                            }
                        </div>
                    </div>

                    <div>
                        <button type="submit" disabled={isLoading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login