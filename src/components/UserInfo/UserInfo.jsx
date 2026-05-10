export const UserInfo = ({ user }) => {
  return (
    <>
      <p className="UserInfo__email">{user.email}</p>
      <p className="UserInfo__name">{user.name}</p>
    </>
  );
};
