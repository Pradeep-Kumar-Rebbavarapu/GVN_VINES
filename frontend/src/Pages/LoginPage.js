import React from 'react'
import { Formik, Form, Field } from 'formik'
import Input from '../components/Input'
import * as Yup from 'yup'
import TextField from '../components/TextField'
import { useState } from 'react'
import { useContext } from 'react'
import Context from '../Context/Context'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react'
const LoginPage = () => {
    let navigate = useNavigate()
    let { setauthtoken, setloading,loading } = useContext(Context)
    const initialValues = {
        email: '',
        password: '',
        username: '',

    }


    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required'),

        password: Yup.string().required('Required'),

        username: Yup.string().required('Required'),


    });
    const onSubmit = (values) => {
        Login(values)


    }
    const Login = async (values) => {
        try{
            setloading(true)
        let response = await fetch('https://gvn-backend.herokuapp.com/api/v1/Login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': values.username,
                'password': values.password,
                'email': values.email
            })
        })
        let data = await response.json()
        if (response.status === 200) {
            setauthtoken(data)
            localStorage.setItem('authtoken', JSON.stringify(data))
            navigate('/')
            setloading(false)
            toast.success("Logged In succesfully", { position: toast.POSITION.TOP_LEFT })
        }
        else{
            toast.error("Log In Unsuccesfully Please Recheck Your Credentials", { position: toast.POSITION.TOP_LEFT })
        }
        }
        catch(e){
            toast.error("Log In Unsuccesfully Please Recheck Your Credentials", { position: toast.POSITION.TOP_LEFT })
        }
        
    }
    useEffect(()=>{
        if(loading){
            return <h1>Loading..</h1>
        }
    },[])
    return (
        <div className='bg-cover bg-center bg-no-repeat' style={{ 'backgroundImage': 'url("images/login2.webp")' }}>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    
                    formik =>
                    
                        <Form>

                            <section className="text-gray-600 body-font ">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                                    <div className="lg:w-3/5 my-3 md:pr-16 lg:pr-0 pr-0">
                                        <h1 className="title-font font-medium text-3xl text-gray-900">Gaurav v Navada Has An Exclusive Offer Of Retainment For U.Support Us to Gain It</h1>
                                        <p className="leading-relaxed mt-4">We All Are Here To Support You When Your Suport Us Do Join Us To Participate.</p>
                                    </div>
                                    <div className="lg:w-2/6  bg-gray-300 bg-opacity-70 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log in</h2>
                                        <div className="relative mb-4">
                                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Username</label>
                                            <Input type="text" id="full-name" name="username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <div className="relative mb-4">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <Input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <div className="relative mb-4">
                                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                            <Input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <button disabled={!formik.isValid || !formik.dirty} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                                        <div className="text-xs text-gray-500 mt-3">Dont Have An Account <Link className='text-indigo-500' to='/Signup'>Signup</Link></div>
                                    </div>
                                </div>
                            </section>
                        </Form>

                }
            </Formik>
        </div>
    )
}

export default LoginPage
