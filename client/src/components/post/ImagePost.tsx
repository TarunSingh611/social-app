'use client';
import React, { useState, ChangeEvent, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import ImageInput from "./postCC/ImageInput";
import CaptionInput from "./postCC/CaptionInput";
import HashtagsInput from "./postCC/HashtagsInput";
import { toast } from "react-toastify";
import apiPostImage from "@/api/posts/apiPostImage";

export default function ImagePost() {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState<string>("");
  const [hashtags, setHashtags] = useState<string[]>([]);

  const editorRef = useRef<AvatarEditor | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleCaptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };

  const handleHashtagsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawHashtags = e.target.value.split(",");
    const cleanedHashtags = rawHashtags.map((tag) => tag.trim());
    setHashtags(cleanedHashtags);
  };

  const handleConfirmUpload = () => {
    if (!image) {
      toast.error("Please select an image");
      return;
    }

    apiPostImage({ image, caption, hashtags }).then((res: any) => {
      if (res.statusCode !== 200) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
      }
    });

    resetForm();
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
  
          if (!file ) {
            toast.warning("Please select an image");
            setImage(null);
            return;
          }
          setImage(file);
        }
      });
    }

  }

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setImage(null);
    setCaption("");
    setHashtags([]);
  };

  return (
    <div>
      <ImageInput image={image} onChange={handleImageChange} editorRef={editorRef} onImageSubmit={handleConfirmImage} />
      <CaptionInput caption={caption} onChange={handleCaptionChange} />
      <HashtagsInput hashtags={hashtags} onChange={handleHashtagsChange} />

      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
          onClick={handleConfirmUpload}
          disabled={!image}
        >
          Post
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md"
          onClick={handleCancel}
        >
          Cancel
        </button>

      </div>
    </div>
  );
}
