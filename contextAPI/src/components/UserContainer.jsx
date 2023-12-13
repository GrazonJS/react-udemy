import React from "react";

function UserContainer() {
  return <p>hello</p>;
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button>logout</button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}

export default UserContainer;
