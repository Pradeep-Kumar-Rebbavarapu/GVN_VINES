import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { toast } from 'react-toastify'

import { useState } from 'react';
import { useContext } from 'react';
import Context from '../Context/Context';
const Navbar = () => {
    let { authtoken, userdetails, setauthtoken, setpostvalue, setuserdetails } = useContext(Context)
    let [navstate, setnavstate] = useState('hidden lg:block')

    let navigate = useNavigate()
    const handletogglenavbar = () => {
        if (navstate === 'hidden lg:block') {
            setnavstate('block')

        }
        else {

            setnavstate('hidden lg:block')
        }
    }

    const logout = () => {
        setauthtoken(null)
        setpostvalue(null)
        setuserdetails(null)
        localStorage.clear()
        navigate('/')
    }
      
    return (
        <div className='lg:grid grid-cols-[100px_auto] '>
            
            <div id="logo" className=" mx-3 my-3 lg:my-auto lg:mx-auto flex justify-between ">
                <img className="h-10 w-10 rounded-lg" src="images/logo1.png" alt="" />
                <div className='' onClick={handletogglenavbar}>
                    <IoIosArrowDropdownCircle className='h-10 w-10 lg:hidden cursor-pointer' />
                </div>

            </div>

            <nav id="navbar" className={`my-4 ${navstate} lg:mx-5`}>
                <ul className='lg:flex  justify-between'>
                    <li className='mx-2 my-3 lg:my-auto lg:hover:scale-105'>
                        <Link className="hover:border-t-2 hover:border-black  p-1" to="/">Home</Link>
                    </li>
                    {authtoken ? (
                        null
                    ) : (
                        <li className='mx-2 my-3 lg:my-auto lg:hover:scale-105'>
                            <Link className="hover:border-t-2 hover:border-black  p-1" to="/Login">Login</Link>
                        </li>
                    )}

                    <li className='mx-2 my-3 lg:my-auto lg:hover:scale-105'>
                        <Link className="hover:border-t-2 hover:border-black  p-1" to="/Signup">Signup</Link>
                    </li>
                    <li className="mx-2 my-3 lg:my-auto lg:hover:scale-105">
                        <a href={authtoken ? "https://teeshopper.in/store/Gaurav-V-Navada" : "/Login"} className="hover:border-t-2 hover:border-black  p-1">Shop</a>
                    </li>
                    <li className='mx-2 my-3 lg:my-auto lg:hover:scale-105'>
                        <Link className="hover:border-t-2 hover:border-black  p-1" to="/YoutubeVideos">My Videos</Link>
                    </li>
                    <li className='mx-2 my-3 lg:my-auto lg:hover:scale-105'>
                        <Link className="hover:border-t-2 hover:border-black  p-1" to="/InstaReels">Insta Reels</Link>
                    </li>
                    {authtoken ? (
                        <li className='mx-2 my-3 lg:my-auto '>
                            <button onClick={logout} className=' p-1 rounded-md bg-gray-800 text-gray-50 hover:bg-gray-700 transition-all fade-in-out focus:ring-[7px] focus:ring-opacity-50 focus:ring-black' to="/">Logout</button>
                        </li>
                    ) : (
                        null
                    )}
                    {userdetails ? (
                        <div className=' flex justify-end my-auto'>
                            <div className="my-auto mx-3">{userdetails.payload.username}
                            </div>
                            <Avatar className="my-auto" sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}>{userdetails.payload.username.slice(0, 1).toUpperCase() + userdetails.payload.username.slice(1, 2).toUpperCase()}</Avatar>
                        </div>
                    ) : (
                        null
                    )}

                </ul>

            </nav>
            <div className='App'>
      
    </div>
        </div>
    )
}

export default Navbar