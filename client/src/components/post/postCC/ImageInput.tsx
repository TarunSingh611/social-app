import React, { ChangeEvent, useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

interface ImageInputProps {
  image: File | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  editorRef: React.RefObject<AvatarEditor>;
}

const ImageInput: React.FC<ImageInputProps> = ({ image, onChange, editorRef }) => {
  const [zoom, setZoom] = useState<number>(1.0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      onChange(e);
    }
  };

  const handleZoomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setZoom(parseFloat(e.target.value));
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor="image" className="block text-sm font-medium text-gray-600">
        Image:
      </label>
      <div className="mt-1 imageInputContainer flex flex-col items-center">
        <label
          htmlFor="image"
          className="cursor-pointer flex items-center justify-center h-full w-full border-2 border-dashed border-gray-400 rounded-md"
        >
          {image ? (
            <AvatarEditor
              className='!w-full !h-full'
              ref={editorRef}
              image={URL.createObjectURL(image)}
              width={1080}
              height={1080}
              border={10}
              scale={zoom}
              crossOrigin="anonymous"
              color={[255, 255, 255, 0.6]} // RGBA
              rotate={0}
            />
          ) : (
            <svg
              className="h-64 w-64 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          )}
        </label>
        <input
          type="file"
          id="image-input"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="mt-4">
          <label htmlFor="zoom" className="block text-sm font-medium text-gray-600">
            Zoom:
          </label>
          <input
            type="range"
            id="zoom"
            min="1"
            max="3"
            step="0.1"
            value={zoom}
            onChange={handleZoomChange}
          />
        </div>

        <button
          className="m-4 bg-blue-500 text-white py-1 px-2 rounded-md"
          onClick={handleButtonClick}
        >
          Add Image
        </button>
      </div>
    </div>
  );
};

export default ImageInput;
