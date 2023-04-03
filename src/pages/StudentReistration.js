/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import learningportal from "../assets/image/learningportal.svg"
import { useRegisterMutation } from '../features/auth/authApi'
import { NotificationManager } from 'react-notifications'
const StudentReistration = () => {
    const [userReg, setUserReg] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    console.log({ userReg })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserReg({ ...userReg, [name]: value })
    }
    const [register, {data, isLoading, isError, error}] = useRegisterMutation();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userReg.password!==userReg.confirmPassword){
            console.log("password not match")
        } else {
            register({
                name: userReg.name,
                email: userReg.email,
                password: userReg.password,
                role: "student"
            });
        }
    }

    const navigate = useNavigate()

    useEffect(()=>{
        if(error){
            NotificationManager.error(error.data,"", 5000)
        }
        if(data?.accessToken && data?.user){
            navigate("/leader-board")
        }
    },[data, isError, error, navigate])
    return (
        <section className="py-6 bg-primary h-screen grid place-items-center">
            <div className="mx-auto max-w-md px-5 lg:px-0">
                <div>
                    <img className="h-12 mx-auto" src={learningportal} />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                        Create Your New Account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="name" className="sr-only">Name</label>
                            <input id="name" name="name" type="name" autocomplete="name" onChange={handleChange}
                                required
                                className="login-input rounded-t-md" placeholder="Student Name" />
                        </div>
                        <div>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" onChange={handleChange} type="email" autocomplete="email" required
                                className="login-input " placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" name="password" onChange={handleChange} type="password" autocomplete="current-password" required
                                className="login-input" placeholder="Password" />
                            {/* {
                                userReg.password != userReg.confirmPassword && (
                                    <span style={{ color: "red" }}>Password dose not match</span>
                                )
                            } */}

                        </div>
                        <div>
                            <label for="confirm-password" className="sr-only">Confirm Password</label>
                            <input id="confirm-password" name="confirmPassword" onChange={handleChange} type="password"
                                autocomplete="confirm-password" required className="login-input rounded-b-md"
                                placeholder="Confirm Password" />
                            {
                                userReg.password != userReg.confirmPassword ? (
                                    userReg.confirmPassword &&
                                    <span style={{ color: "red" }}>Password dose not match</span>) : (
                                    userReg.confirmPassword && <span style={{ color: "green" }}>Password matched</span>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <Link to="/" className="font-medium text-violet-600 hover:text-violet-500">
                                Login
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                            disabled={isLoading}
                            // disabled={userReg.password === userReg.confirmPassword?false:true }
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default StudentReistration