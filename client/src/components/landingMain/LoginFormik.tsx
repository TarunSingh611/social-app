"use client";
import { useFormik } from "formik";
import { setToken } from "@/services/auth";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface FormValues {
    emailorusername: string;
    password: string;
}
const validationSchema = Yup.object().shape({
    emailorusername: Yup.string()
        .required("Email or username is required")
        .test(
            "emailOrUsernameFormat",
            "Invalid email address or username",
            function (value) {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
                return emailRegex.test(value) || usernameRegex.test(value);
            }
        ),
    password: Yup.string().required("Password is required"),
});

const handleSubmit = async (values: FormValues): Promise<void> => {
    const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    
    const responseData = await response.json(); 
    console.log(responseData);
    

    // fetch('/api/user/apiLogin',{body:{...values}})
    // .then((data: any) => {
    //     if (data.statusCode === 200) {
    //         toast.success(data.message);
    //         setToken(data.token);
    //         return;
    //     } else if (data.statusCode === 400) {
    //         toast.error(data.error);
    //         return;
    //     } else if (data.statusCode === 403) {
    //         toast.error(data.error);
    //         toast.info(
    //             "Please Verify your email and login to continue"
    //         );
    //         toast.warning("Verification link sent to your email");
    //         return;
    //     } else if (data.statusCode === 500) {
    //         toast.error(data.error);
    //         return;
    //     } else {
    //         toast.error(data.error);
    //         return;
    //     }
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
};

const LoginFormik = () => {
    const formik = useFormik<FormValues>({
        initialValues: {
            emailorusername: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });

    const config = [
        {
            htmlFor: "email",
            className: "ml-4 mt-2 col-span-1 dark:text-gray-200",
            textContent: "Email/Username",
            id: "emailorUsername",
            name: "emailorusername",
            type: "string",
            value: formik.values.emailorusername,
        },
        {
            htmlFor: "password",
            className: "ml-4 mt-8 col-span-1 dark:text-gray-200",
            textContent: "Password",
            id: "passwordLogin",
            name: "password",
            type: "password",
            value: formik.values.password,
            autoComplete: "current-password",
        },
    ];

    return (
        <div className="bg-gradient-to-r h-full w-full from-blue-200 dark:from-sky-700 via-blue-100 dark:via-sky-500  to-green-200 dark:to-teal-600 flex justify-center items-center p-8 pt-12 shadow-lg">
            <form
                onSubmit={formik.handleSubmit}
                className="formikLogin grid grid-cols-1 gap-4 md:grid-cols-3"
            >
                <div className="formTitle md:col-span-3">
                    <p>Login</p>
                    <p>Form</p>
                </div>
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
                            autoComplete={item.autoComplete || "on"}
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
