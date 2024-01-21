'use client';
import React, { useEffect } from 'react';
import { useFormik, FormikErrors } from 'formik';
import registerUser from '@/api/user/apiRegister'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { setOverlayDefault } from '@/redux/ReduxSlicer';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
    [key: string]: any;
}
const SignupFormik = () => {


    const dispatch = useDispatch();

    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
        },

        validate: (values: FormValues) => {
            const errors: Partial<FormValues> = {};
            if (!values.firstName) {
                errors.firstName = 'First Name is required';
            }
            if (values.firstName && !/^[A-Z][a-z]*$/i.test(values.firstName)) {
                errors.firstName = 'Invalid First Name';
            }
            if (!values.lastName) {
                errors.lastName = 'Last Name is required';
            }
            if (values.lastName && !/^[A-Z][a-z]*$/i.test(values.lastName)) {
                errors.lastName = 'Invalid Last Name';
            }
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters';
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = 'Confirm Password is required';
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = 'Passwords must match';
            }

            return errors;
        },
        onSubmit: (values: any) => {

            registerUser(values.firstName, values.lastName, values.email, values.password)
                .then((data: any) => {
                    if (data.statusCode === 200) {
                        toast.success(data.error);
                        dispatch(setOverlayDefault(false));
                        toast.info("Please Verify your email and login to continue");
                        toast.warning("Verification link sent to your email");

                        values.firstName = '';
                        values.lastName = '';
                        values.email = '';
                        values.password = '';
                        values.confirmPassword = '';
                        values.terms = false;

                        return;
                    }
                    else if (data.statusCode === 400) {
                        toast.error(data.error);
                        return;
                    }
                    else if (data.statusCode === 500) {
                        toast.error(data.error);
                        return;
                    }
                    else {
                        toast.error(data.error);
                        return;
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        },
    });

    const config = [
        {
            label: 'First Name',
            id: 'firstName',
            name: 'firstName',
            type: 'text',



        },
        {
            label: 'Last Name',
            id: 'lastName',
            name: 'lastName',
            type: 'text',


        },
        {
            label: 'Email Address',
            id: 'email',
            name: 'email',
            type: 'email',

        },
        {
            label: 'Password',
            id: 'password',
            name: 'password',
            type: 'password',
            autocomplete: 'current-password'

        },
        {
            label: 'Confirm Password',
            id: 'confirmPassword',
            name: 'confirmPassword',
            type: 'password',
            autocomplete: 'current-password'

        },
    ];

    return (
        <div className='bg-gradient-to-r h-full w-full from-blue-300 dark:from-sky-700 dark:to-teal-500 to-green-300 flex justify-center items-center p-6 shadow-lg'>
            <form onSubmit={formik.handleSubmit} className="formikSignup grid grid-cols-1 gap-1">
                <div className="formTitle"><p>Signup</p><p>Form</p></div>
                {config.map((item) => (
                    <div key={item.id} className="col-span-1  md:col-span-3 grid grid-cols-1 md:grid-cols-3">
                        <label htmlFor={item.id} className='ml-4 mt-2 col-span-1 dark:text-gray-200'>{item.label}</label>
                        <input
                            id={item.id}
                            name={item.name}
                            type={item.type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[item?.name]}
                            autoComplete={item.autocomplete || 'off'}
                            className='col-span-1 md:col-span-2 p-2 mx-2 mb-2 rounded-md bg-gray-100 dark:text-gray-800'
                        />
                        {formik.touched[item?.name] && formik.errors[item?.name] ? (
                            <div key={item.name} className="text-red-500 text-xs col-span-1 md:col-start-2 md:col-span-2 text-center ">
                                {String(formik.errors[item.name])}
                            </div>
                        ) : null}
                    </div>
                ))}
                <div className='flex col-span-1 md:col-span-3 mb-4 ml-4'>
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.terms}
                        className=" focus:ring-green-500 h-4 w-4 my-auto !bg-gray-100 dark:text-gray-800 accent-purple-800 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className='ml-2 text-gray-700 dark:text-gray-200'>I accept the terms and conditions</label>
                </div>
                <input
                    type="submit"
                    value="Submit"
                    className={`p-2 w-1/4 mx-auto  md:col-span-1 md:col-end-2 col-span-1 mb-2 rounded-md ${!formik.values.terms ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-green-300 hover:from-green-500 via bg-green-200 to-blue-400 dark:from-teal-500 dark:to-sky-300 border-stone-950 hover:bg-blue-500 hover:text-white focus:outline-none focus:border-blue-500'}`}
                    disabled={!formik.values.terms}
                />
            </form>
        </div>
    )
}
export default SignupFormik