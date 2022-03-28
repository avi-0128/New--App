import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import MoviesHome from "./components/MoviesHome";
import Profile from "./components/Profile";
import Favourites from "./components/Favourites";
import DuplicateMovies from "./components/DuplicateMovies";
import DuplicateProfile from "./components/DuplicateProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<MoviesHome />} />
          <Route path="/home/profile" element={<Profile />} />
          {/* <Route path="/home/profile" element={<DuplicateProfile />} /> */}
          <Route path="/home/fav" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
