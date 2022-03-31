import React, { useState } from "react";
import { getCurrentUser } from "./CurrentUser";
import DuplicateMovies from "./DuplicateMovies";
import MoviesHome from "./MoviesHome";
import RegDuplicate from "./RegDuplicate";
import Register from "./Register";

const Home = () => {
  const currentUser = getCurrentUser()
 console.log(currentUser)
  return <>{ currentUser ? <MoviesHome /> : <RegDuplicate />}</>;
};

export default Home;
