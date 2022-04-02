import React from "react";
import { getCurrentUser } from "./CurrentUser";
import NavBar from "./NavBar";
import ProfileNav from "./ProfileNav";

const Password = () => {
  const user = getCurrentUser();
  return (
    <>
      <NavBar />
      <ProfileNav />
      <div className="card text-center w-50 mx-auto mt-5">
        <h4>
          User Password: <span>{user.password}</span>
        </h4>
      </div>
    </>
  );
};

export default Password;
