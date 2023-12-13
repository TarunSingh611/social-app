import React, { useState } from "react";
import { useFormik } from "formik";
import apiUpdateSecurity from "@/api/user/apiUpdateSecurity";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface SecurityProps {
  user: {
    email?: string;
    phone?: string;
    password?: string;
    recoveryEmail?: string;
  };
  onUpdateProfile: (values: any) => void;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string(),
  password: Yup.string(),
  recoveryEmail: Yup.string().email("Invalid email address"),
  currentPassword: Yup.string().test(
    "isEditing",
    "Current password is required",
    function (value) {
      const isEditing = this.parent.$isEditing;
      return isEditing ? !!value : true;
    }
  ),
});

const Security: React.FC<SecurityProps> = ({ user, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: user?.email || "",
      phone: user?.phone || "",
      password: "",
      recoveryEmail: user?.recoveryEmail || "",
      currentPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      apiUpdateSecurity(values)
        .then((res: any) => {
          if (res.statusCode === 200) {
            toast.success(res.message);
          } else if (res.statusCode === 400) {
            toast.error(res.message);
          }else if(res.statusCode === 401){
            toast.error(res.message);
          }else if (res.statusCode === 500) {
            toast.error(res.message);
          } else if (res.statusCode === 404) {
            toast.error(res.message);
          } else {
            toast.error("unkopnwn error");
          }
        })
        .catch(() => {
          toast.error("unkopnwn error");
        });
    },
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold my-2">Security Settings</h2>
      <form onSubmit={formik.handleSubmit}>
        {renderEditableItem("Email", "email", formik)}
        {renderEditableItem("Phone", "phone", formik)}
        {renderEditableItem("Password", "password", formik)}
        {renderEditableItem("Recovery Email", "recoveryEmail", formik)}

        {isEditing && renderCurrentPasswordField(formik)}

        <div className="flex justify-end">
          {!isEditing && (
            <>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleEditClick}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </>
          )}
          {isEditing && (
            <>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={!formik.isValid}
              >
                Confirm Changes
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

const renderEditableItem = (label: string, fieldName: string, formik: any) => (
  <div key={fieldName} className="mb-4">
    <label
      htmlFor={fieldName}
      className="block text-sm font-medium text-gray-600"
    >
      {label}
    </label>
    <input
      type="text"
      id={fieldName}
      name={fieldName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[fieldName]}
      className="mt-1 p-2 border rounded-md w-full"
    />
    {formik.touched[fieldName] && formik.errors[fieldName] && (
      <div className="text-red-600">{formik.errors[fieldName]}</div>
    )}
  </div>
);

const renderCurrentPasswordField = (formik: any) => (
  <div className="mb-4">
    <label
      htmlFor="currentPassword"
      className="block text-sm font-medium text-gray-600"
    >
      Current Password
    </label>
    <input
      type="password"
      id="currentPassword"
      name="currentPassword"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.currentPassword}
      className="mt-1 p-2 border rounded-md w-full"
    />
    {formik.touched.currentPassword && formik.errors.currentPassword && (
      <div className="text-red-600">{formik.errors.currentPassword}</div>
    )}
  </div>
);

export default Security;
