import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import MoviesHome from "./components/MoviesHome";
import Profile from "./components/Profile";
import Favourites from "./components/Favourites";

import LogOut from "./components/LogOut";

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
          <Route path="home/logout" element={<LogOut/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
