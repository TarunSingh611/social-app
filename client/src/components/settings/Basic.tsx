import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  setProfilePhoto,
  setCoverPhoto,
}from "../../redux/slicers/authSlice";
import apiSetPicture from "../../api/user/apiSetPicture";
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

const Basic: React.FC<BasicProps> = ({ user, onUpdateProfile }) => {
  const dispatch = useDispatch();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [coverPicture, setCoverPicture] = useState<File | null>(null);

  useEffect(() => {
    const file = profilePicture;
    console.log(file)
      if (!file) return;
      apiSetPicture(file, "profilePicture").then((res: any) => {
        if (res.statusCode !== 200) {
          toast.error(res.message);
        } else if(res.statusCode === 200) {
          toast.success(res.message);
          console.log(res)
          res?.picture ? dispatch(setProfilePhoto(res.picture)) : null
        }
      });
      setProfilePhoto(null)

  }, [profilePicture]);

  useEffect(() => {

      const file = coverPicture;
      console.log(file)
      if (!file) return;
      apiSetPicture(file, "coverPhoto").then((res: any) => {
        if (res?.statusCode !== 200) {
          toast.error(res.message);
        } else if(res?.statusCode === 200) {
          toast.success(res?.message);
          console.log(res)
          dispatch(setCoverPhoto(res?.picture));
        }
      });
      setCoverPhoto(null);
  }, [coverPicture]);

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
  const handleUpdateProfilePicture = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files && e.target.files[0];
    setProfilePicture(file || null);
    e.target.value = '';
  };

  const handleUpdateCoverPicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setCoverPicture(file || null);
    e.target.value = '';
  };
  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold my-2">Profile Information</h2>
      <div className="flex justify-around w-full m-4">
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpdateProfilePicture}
          />
          <div className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
            Update Profile Picture
          </div>
        </label>
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpdateCoverPicture}
          />
          <div className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
            Update Cover Picture
          </div>
        </label>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {(["fullName", "username", "bio"] as const).map((field) => (
          <div key={field} className="mb-4">
            <label
              htmlFor={field}
              className="block text-sm font-medium text-gray-600"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === "bio" ? (
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
                type="text"
                id={field}
                name={field}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field] as string}
                className="mt-1 p-2 border rounded-md w-full"
              />
            )}
            {formik.touched[field] && formik.errors[field] && (
              <div className="text-red-600">
                {formik.errors[field] as string}
              </div>
            )}
          </div>
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
