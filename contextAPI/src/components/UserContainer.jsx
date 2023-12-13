import React from "react";
import { useAppContext } from "./Navbar";

function UserContainer() {
  const { user, logout } = useAppContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}

export default UserContainer;
