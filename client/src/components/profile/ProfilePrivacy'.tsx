// Settings.tsx
import React from "react";

const ProfilePrivacy = ({ user, editing, handleInputChange }: any) => {
  return (

      <div>
        <p>
          <strong>Hide Email:</strong>{" "}
          {user?.hideEmail ? "Yes" : "No"}
        </p>
        <p>
          <strong>Hide Phone:</strong>{" "}
          {user?.hidePhone ? "Yes" : "No"}
        </p>
        <p>
          <strong>Hide Relationship:</strong>{" "}
          {user?.hideRelationship ? "Yes" : "No"}
        </p>
        {/* Add more settings as needed */}
      </div>

  );
};

export default ProfilePrivacy;
