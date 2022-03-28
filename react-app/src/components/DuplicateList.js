
import React, { useEffect, useRef, useState } from 'react'

const DuplicateList = (props) => {

   
  
    const inc = () => {
        
     
       props.setPageNumber(pageNumber => pageNumber + 1)
    }
 
  
   const myref = useRef()
    useEffect(() => {
        if(props.loading){
            const observer = new IntersectionObserver(entries =>{
                console.log(entries[0])
                if(entries[0].isIntersecting){
                    inc()
                }
            } ,{ threshold : 1})
            observer.observe(myref.current)
        }
    }, [props.loading])

  return (
   <>
   <div> Total viewed Results{props.movies.length} <div className='text-center'>Total results found for {props.search} - {props.count}</div>  {props.pageNumber}</div>
   
   {
       props.movies.map((movie, index) => (
        <div
          className="card text-center w-25 mx-auto mt-5"
          key={index}
        >
          <img src={movie.Poster} alt={movie.Title} />
          <div className="card-body">
            <p className="card-text mx-auto">{movie.Title}</p>
            <p className="card-text">Year - {movie.Year}</p>
            <p className="card-text">Type - {movie.Type}</p>
            <butto type='button' className='btn btn-primary'>Add To Favourites</butto>
          </div>
        </div>
      ))
   }  
 
   <button ref={myref} onClick={inc} type='button' className='btn btn-dark'>Load More</button>
  
  
   </>
  )
}

export default DuplicateList