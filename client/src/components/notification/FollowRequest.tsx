import React, { useState } from 'react';

interface FollowRequestProps {
  requests: Array<{
    _id: string;
    type: string;
    from: string;
    contentDetails: {
      content: string;
      _id: string;
    };
    createdAt: string;
  }>;
}

const FollowRequest: React.FC<FollowRequestProps> = ({ requests }) => {
  const [clickedCard, setClickedCard] = useState<string | null>(null);

  const handleCardClick = (cardId: string) => {
    setClickedCard(clickedCard === cardId ? null : cardId);
  };

  return (
    <div>
      {requests.map((request) => (
        <div
          key={request._id}
          onClick={() => handleCardClick(request._id)}
          className={`bg-gray-100 cursor-pointer p-4 m-1 mx-4 rounded-md shadow-md transition-transform transform-gpu hover:scale-105 ${
            clickedCard === request._id ? 'z-10' : 'z-1'
          }`}
        >
          <p className="text-gray-700">{request.contentDetails.content}</p>
          <p className="text-sm text-gray-500 mt-2">
            Requested on {new Date(request.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FollowRequest;
