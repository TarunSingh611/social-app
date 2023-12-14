import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

interface BasicProps {
  user: {
    fullName?: string;
    username?: string;
    bio?: string;
  };
  onUpdateProfile: (values: any) => void;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  username: Yup.string().required("Username is required"),
  bio: Yup.string(),
});

const Input: React.FC<{
  field: string;
  label: string;
  type?: string;
  textarea?: boolean;
  formik: any;
}> = ({ field, label, type = "text", textarea = false, formik }) => (
  <div className="mb-4">
    <label htmlFor={field} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    {textarea ? (
      <textarea
        id={field}
        name={field}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[field] as string}
        className="mt-1 p-2 border rounded-md w-full"
      />
    ) : (
      <input
        type={type}
        id={field}
        name={field}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[field] as string}
        className="mt-1 p-2 border rounded-md w-full"
      />
    )}
    {formik.touched[field] && formik.errors[field] && (
      <div className="text-red-600">{formik.errors[field] as string}</div>
    )}
  </div>
);

const Basic: React.FC<BasicProps> = ({ user, onUpdateProfile }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullName: user?.fullName || "",
      username: user?.username || "",
      bio: user?.bio || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onUpdateProfile(values);
    },
  });

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold my-2">Profile Information</h2>

      <form onSubmit={formik.handleSubmit}>
        {(["fullName", "username", "bio"] as const).map((field) => (
          <Input
            key={field}
            field={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            textarea={field === "bio"}
            formik={formik}
          />
        ))}

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={!formik.isValid}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Basic;
