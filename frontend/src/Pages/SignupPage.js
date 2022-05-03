import React from 'react'
import { Formik, Form, Field } from 'formik'
import Input from '../components/Input'
import * as Yup from 'yup'
import TextField from '../components/TextField'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../Context/Context'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react'
const SignupPage = () => {
    let {setloading,setalert,notify,loading} = useContext(Context)
    let navigate = useNavigate()
    const initialValues = {
        email: '',
        password: '',
        username: '',
        confirm_password: '',
    }
    const validate = (values) => {
        let errors = {}
        if (isNaN(values.password)) {
            errors.password = 'Password Must be A Mix Of Alphabets and Numbers'
        }

        return errors
    }
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required').min(5, 'Atleast 5 characters required'),

        password: Yup.string().required('Required').matches(/^(?=.{6,})/, "Must Contain 6 Characters")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])/,
                "Must Contain One Uppercase, One Lowercase"
            )
            .matches(
                /^(?=.*[!@#\$%\^&\*])/,
                "Must Contain One Special Case Character"
            )
            .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),

        username: Yup.string().required('Required').min(5, 'Atleast 5 characters required'),

        confirm_password: Yup.string().required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });
    const onSubmit = (values) => {
        Signup(values)


    }
    const Signup = async (values) => {
    try{
        setloading(true)
        let response = await fetch('https://gvn-backend.herokuapp.com/api/v1/Signup/', {
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
        if(response.status===201){
            
            toast.success('Signed Up Succesfully',{position:toast.POSITION.TOP_LEFT})
        }
        else{
            if(data.username){
                toast.error("A user with that username already exists.",{position:toast.POSITION.TOP_LEFT})
            }
            if(data.error){
                toast.error('User Already Exists with the given Email',{position:toast.POSITION.TOP_LEFT})
            }
            else{
                toast.error("Signup Unsuccesfull",{position:toast.POSITION.TOP_LEFT})
            }
            
        }
        // Gansta@11519
        setloading(false)
    }
    catch(e){
        toast.error("Signup Unsuccesfull",{position:toast.POSITION.TOP_LEFT})
    }
        
    }

    useEffect(()=>{
        if(loading){
            return <h1>Loading..</h1>
        }
    },[])
    return (
        <div style={{ 'backgroundImage': 'url("images/signup2.jpg")' }} className='lg:grid grid-cols-2 bg-center bg-no-repeat bg-cover'>

            <Formik initialValues={initialValues} validationSchema={validationSchema || validate} onSubmit={onSubmit}>
                {

                    formik =>
                    
                        <Form>
                            
                            <section className="text-gray-600 body-font ">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                                    
                                    <div className="  bg-gray-300  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
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
                                        <div className="relative mb-4">
                                            <label htmlFor="confirm_password" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                                            <Input type="password" id="confirm_password" name="confirm_password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <div className='flex my-2'>
                                            <button type="reset" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Reset</button>
                                            <button disabled={!formik.isValid || !formik.dirty} type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-2">Signup</button>
                                        </div>
                                        <p  className="text-xs text-gray-500 mt-3">Already Have An Account <Link className='text-indigo-500' to='/Login'>Login</Link></p>
                                    </div>
                                </div>
                            </section>
                        </Form>


                }
            </Formik>
            <div className='mx-10 lg:py-32  rounded-md'>
                <img className='w-full h-full rounded-md' src="images/signup1.jpg" alt="" />
            </div>
        </div>
    )
}

export default SignupPage
