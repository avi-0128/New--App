import { getCurrentUser } from "./CurrentUser"



const currentFav = getCurrentUser() && JSON.parse(localStorage.getItem(getCurrentUser().phoneNumber))

export const nextFav = (movie) => {
  const newFav = currentFav.filter((allMovie) => allMovie.imdbID !== movie.imdbID)
  console.log(movie)
}