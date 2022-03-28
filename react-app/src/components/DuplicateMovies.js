import React, { useEffect, useState } from 'react'
import DuplicateList from './DuplicateList'
import NavBar from './NavBar'

const DuplicateMovies = () => {
    const [loading , setLoading] = useState(false)
    const [search , setSearch] = useState('')
    const [pageNumber , setPageNumber] = useState(1)
    const [movies ,setMovies] = useState([])
    const [count,setCount] = useState(0)
    const getMovieRequest = async (search , pageNumber) => {
        const url = `http://www.omdbapi.com/?apikey=14f1c93e&s=${search}&page=${pageNumber}`
        console.log(url)
        const response = await fetch(url)
        const responseJson = await response.json()
        setCount(responseJson.totalResults)
        if(responseJson.Search){
            setMovies(movies.concat(responseJson.Search))
            setLoading(true)
        }
    }

    useEffect(() => {
        if(search===''){
            setMovies([])
            setPageNumber(1)
            setLoading(false)
        }
        else if(search.trim()){
            getMovieRequest(search , pageNumber)
        }
    } , [search , pageNumber])
//  console.log(movies)
  return (
    <div>
        <NavBar setSearch={setSearch}/>
        <DuplicateList movies={movies} setPageNumber={setPageNumber} pageNumber={pageNumber} search={search} loading={loading} count={count}/>
    </div>
  )
}

export default DuplicateMovies