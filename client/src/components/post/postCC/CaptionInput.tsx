import React, { ChangeEvent } from 'react';

interface CaptionInputProps {
  caption: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CaptionInput: React.FC<CaptionInputProps> = ({ caption, onChange }) => (
  <div className="mb-4">
    <label htmlFor="caption" className="block text-sm font-medium text-gray-600">
      Caption:
    </label>
    <input
      type="text"
      id="caption"
      value={caption}
      onChange={onChange}
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>
);

export default CaptionInput;
