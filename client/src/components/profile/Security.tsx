// Security.tsx
import React from "react";

const Security = ({ user, editing, handleInputChange }: any) => {
  return (

      <div>
      <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Phone:</strong>{" "}
           { user?.phone || "N/A"}
         
        </p>
        <p>
          <strong>Password:</strong>{" "}
            "********"
        </p>
        {/* Add more security-related details as needed */}
      </div>

  );
};

export default Security;
