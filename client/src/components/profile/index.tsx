

const UserProfile = ({ user }: { user: any }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {`${user?.firstName} ${user?.lastName}`}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone || 'N/A'}</p>

      {/* Add more profile information as needed */}

      <p>Followers: {user?.followersCount}</p>
      <p>Following: {user?.followingCount}</p>

      {/* Add more user statistics as needed */}
    </div>
  );
};

export default UserProfile;
