// components/Alerts.tsx
import React from 'react';

interface AlertsProps {
  alerts: Array<{
    _id: string;
    type: string;
    contentDetails: {
      content: string;
      _id: string;
    };
    createdAt: string;
  }>;
}

const Alerts: React.FC<AlertsProps> = ({ alerts }) => {
  return (
    <div>

        {alerts.map((alert) => (
          <div key={alert._id} className="bg-gray-100 cursor-default  hover:bg-white p-4 m-1 mx-4 rounded-md shadow-md transition-transform transform-gpu hover:scale-105">
            <p className="text-gray-700">{alert.contentDetails.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              Received on {new Date(alert.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
  );
};

export default Alerts;
