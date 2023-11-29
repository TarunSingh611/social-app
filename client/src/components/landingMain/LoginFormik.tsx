"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
// import { setToken, getToken } from "@/utils/Auth/tokenManagement";
// import loginUser from "@/app/api/userData/login";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { setUser } from "@/app/redux/ReduxSlicer";

interface FormValues {
  email: string;
  password: string;
}

const LoginFormik = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values: FormValues) => {
      const errors: Partial<FormValues> = {};

      if (!values.email) {
        errors.email = "Email is required";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
    onSubmit: (values) => {
      if (!formik.errors.email && !formik.errors.password) {
        // loginUser(values.email, values.password)
        //   .then((data) => {
        //     // setToken(data)
        //     dispatch(setUser(data));
        //     toast.success("Login successful");
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      }
    },
  });

  const config = [
    {
      htmlFor: "email",
      className: "ml-4 mt-2 col-span-1 dark:text-gray-200",
      textContent: "Email Address",
      id: "email",
      name: "email",
      type: "email",
      value: formik.values.email,
    },
    {
      htmlFor: "password",
      className: "ml-4 mt-8 col-span-1 dark:text-gray-200",
      textContent: "Password",
      id: "password",
      name: "password",
      type: "password",
      value: formik.values.password,
    },
  ];

  return (
    <div className="bg-gradient-to-r h-full w-full from-blue-200 dark:from-sky-700 via-blue-100 dark:via-sky-500  to-green-200 dark:to-teal-600 flex justify-center items-center p-8 pt-12 shadow-lg">
      <form
        onSubmit={formik.handleSubmit}
        className="formikLogin grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        <div className="formTitle md:col-span-3"><p>Login</p><p>From</p></div>
        {config.map((item) => (
          <div
            key={item.id}
            className="col-span-1  md:col-span-3 grid grid-cols-1 md:grid-cols-3"
          >
            <label
              htmlFor={item.id}
              className="ml-4 my-auto col-span-1 dark:text-gray-200"
            >
              {item.textContent}
            </label>
            <input
              id={item.id}
              name={item.name}
              type={item.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={item.value}
              className="p-2 mx-2 my-auto md:col-span-2 dark:bg-gray-200 rounded-md "
            />
          </div>
        ))}
        <div className="col-span-1 md:col-start-2  mt-8 mx-auto">
          <input
            type="submit"
            value="Submit"
            className="p-2 w-full mx-2  mb-2 rounded-md bg-gradient-to-r from-green-400 dark:from-teal-700 hover:from-blue-400 via bg-blue-300 to-blue-400 dark:to-sky-300 border-stone-950 hover:bg-green-400 hover:text-white focus:outline-none focus:border-green-300"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginFormik;
