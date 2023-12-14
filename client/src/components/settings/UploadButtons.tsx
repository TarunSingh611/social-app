import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { setProfilePhoto, setCoverPhoto } from "../../redux/slicers/authSlice";
import apiSetPicture from "../../api/user/apiSetPicture";
import { useDispatch } from "react-redux";

export default function UploadButtons() {
  const dispatch = useDispatch();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [coverPicture, setCoverPicture] = useState<File | null>(null);

  const handleUpdatePicture = (
    file: File | null,
    pictureType: "profilePicture" | "coverPhoto"
  ) => {
    if (!file) return;

    apiSetPicture(file, pictureType).then((res: any) => {
      if (res.statusCode !== 200) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        dispatch(pictureType === "profilePicture" ? setProfilePhoto(res.picture) : setCoverPhoto(res.picture));
      }
    });
  };

  useEffect(() => {
    handleUpdatePicture(profilePicture, "profilePicture");
    setProfilePicture(null);
  }, [profilePicture]);

  useEffect(() => {
    handleUpdatePicture(coverPicture, "coverPhoto");
    setCoverPicture(null);
  }, [coverPicture]);

  const handleUpdateFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    setPicture: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const file = e.target.files && e.target.files[0];
    setPicture(file || null);
    e.target.value = "";
  };

  return (
    <div className="flex justify-around w-full my-8">
      <label className="cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleUpdateFile(e, setProfilePicture)}
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
          onChange={(e) => handleUpdateFile(e, setCoverPicture)}
        />
        <div className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          Update Cover Picture
        </div>
      </label>
    </div>
  );
}
