import React from "react";
import { getCurrentUser } from "./CurrentUser";
import MoviesHome from "./MoviesHome";
import Register from "./Register";

const Home = () => {
  const currentUser = getCurrentUser()
 console.log(currentUser)
 console.log('Hi')
  return <>{ currentUser ? <MoviesHome /> : <Register />}</>;
};

export default Home;
