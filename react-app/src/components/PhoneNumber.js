import React from "react";
import { getCurrentUser } from "./CurrentUser";
import NavBar from "./NavBar";
import ProfileNav from "./ProfileNav";

const PhoneNumber = () => {
  const user = getCurrentUser();
  return (
    <>
      <NavBar />
      <ProfileNav />
      <div className="container-flui card text-center  mx-auto mt-5">
        <h4 className="col-lg-4 col-md-4 col-sm-4">
          User Phone Number: <span>{user.phoneNumber}</span>
        </h4>
      </div>
    </>
  );
};

export default PhoneNumber;
