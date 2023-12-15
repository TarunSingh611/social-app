import React, { useState, ChangeEvent, useRef } from "react";
import { toast } from "react-toastify";
import { setProfilePhoto, setCoverPhoto } from "../../redux/slicers/authSlice";
import apiSetPicture from "../../api/user/apiSetPicture";
import { useDispatch } from "react-redux";
import AvatarEditor from "react-avatar-editor";
import ImageInput from "@/components/post/postCC/ImageInput";

export default function UploadButtons() {
  const dispatch = useDispatch();
  const [picture, setPicture] = useState<File | null>(null);
  const [picType, setPicType] = useState<
    "profilePicture" | "coverPhoto" | null
  >(null);
  const editorRef = useRef<AvatarEditor | null>(null);
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
        dispatch(
          pictureType === "profilePicture"
            ? setProfilePhoto(res.picture)
            : setCoverPhoto(res.picture)
        );
      }
    });
  };

  const handleConfirmImage = (editedImage: string) => {
    if (editorRef.current) {
      editorRef.current.getImage().toBlob((blob: Blob | null) => {
        if (blob) {

          const binaryData = atob(editedImage.split(',')[1]);
  
          const arrayBuffer = new ArrayBuffer(binaryData.length);
          const uint8Array = new Uint8Array(arrayBuffer);
          for (let i = 0; i < binaryData.length; i++) {
            uint8Array[i] = binaryData.charCodeAt(i);
          }
  
          const jpegBlob = new Blob([arrayBuffer], { type: "image/jpeg" });

          const file = new File([jpegBlob], "image.jpg", { type: "image/jpeg" });
  
          if (!file || !picType) {
            toast.warning("Please select an image");
            setPicture(null);
            return;
          }
  
          handleUpdatePicture(file, picType);
          setPicture(null);
        }
      });
    }
  };
  
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setPicture(file);
    }
  };

  const handleUpdateFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profilePicture" | "coverPhoto"
  ) => {
    const file = e.target.files && e.target.files[0];
    setPicture(file || null);
    setPicType(type);
  };

  return picture ? (
    <>
      <ImageInput
        image={picture}
        onChange={handleImageChange}
        editorRef={editorRef}
        onImageSubmit={handleConfirmImage}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Reset
      </button>
    </>
  ) : (
    <div className="flex justify-around w-full my-8">
      <label className="cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleUpdateFile(e, "profilePicture")}
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
          onChange={(e) => handleUpdateFile(e, "coverPhoto")}
        />
        <div className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          Update Cover Picture
        </div>
      </label>
    </div>
  );
}
