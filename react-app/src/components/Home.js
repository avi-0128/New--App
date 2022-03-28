import React, { useState } from "react";
import { getCurrentUser } from "./CurrentUser";
import DuplicateMovies from "./DuplicateMovies";
import MoviesHome from "./MoviesHome";
import Register from "./Register";

const Home = () => {
  const currentUser = getCurrentUser()
 console.log(currentUser)
  return <>{ currentUser ? <MoviesHome /> : <Register />}</>;
};

export default Home;
