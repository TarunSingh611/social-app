// AdditionalDetails.tsx
import React from "react";

const AdditionalDetails = ({ user, editing, handleInputChange }: any) => {
  return (

      <div>

        <p>
          <strong>Gender:</strong>{" "}
            {user?.gender || "N/A"}
        </p>

        <p>
          <strong>Birthday:</strong>{" "}
            {user?.birthday || "N/A"}
        </p>

        <p>
          <strong>Location</strong>:{" "}
            {(user?.location?.city||user?.location?.country) ?(`${user?.location?.city}${user?.location?.city && user?.location?.country ? ", " : "" } ${user?.location?.country}`) : "N/A"}
        </p>
        {/* Add more additional details as needed */}
      </div>

  );
};

export default AdditionalDetails;
