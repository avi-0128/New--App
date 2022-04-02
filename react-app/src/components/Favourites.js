import React, { useEffect, useState } from "react";

import { getCurrentUser } from "./CurrentUser";
import NavBar from "./NavBar";


const Favourites = () => {
  const [getFavourites, setGetFavourites] = useState(
    JSON.parse(localStorage.getItem(getCurrentUser().phoneNumber))
  );
  //console.log(getFavourites)
  const removeFav = (movie) => {
    const currentFav = JSON.parse(
      localStorage.getItem(getCurrentUser().phoneNumber)
    );
    const newFav = currentFav.filter((fav) => fav.imdbID !== movie.imdbID);
    setGetFavourites(newFav);
  };

  useEffect(() => {
    localStorage.setItem(
      getCurrentUser().phoneNumber,
      JSON.stringify(getFavourites)
    );
    console.log(getFavourites)
  }, [getFavourites]);

  return (
    <>
      <NavBar />
      <div>
        {getFavourites.length>0  
          ?
         getFavourites.map((movie, index) => (
            <div className="text-center" alt={movie.Title} key={index}>
              <img src={movie.Poster} alt={movie.Title} />
              <div className="card-body  mx-auto w-50 ">
                <h5 className="card-title mx-auto w-50">{movie.Title}</h5>
                <p className="card-text">Year - {movie.Year}</p>
                <p className="card-text">Type - {movie.Type}</p>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeFav(movie)} >
                  Remove
                </button>
              </div>
            </div>
            
          )) :<div className="text-center card w-25 mx-auto mt-5">
             <h4>No favourites</h4>
          </div> }</div>
        
     
    </>
  );
};

export default Favourites;
