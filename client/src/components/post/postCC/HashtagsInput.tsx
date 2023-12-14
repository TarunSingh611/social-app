import React, { ChangeEvent } from 'react';

interface HashtagsInputProps {
  hashtags?: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const HashtagsInput: React.FC<HashtagsInputProps> = ({ hashtags = [], onChange }) => (
  <div className="mb-4">
    <label htmlFor="hashtags" className="block text-sm font-medium text-gray-600">
      Hashtags:
    </label>
    <input
      type="text"
      id="hashtags"
      value={hashtags.join(', ')}
      onChange={onChange}
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>
);

export default HashtagsInput;
