import React from "react";
import { FaPlus } from 'react-icons/fa';
export default function WatchBtn({movie}){
  let firstDate = new Date(movie.first_air_date);

  function addMyList(movie) {

    return fetch(`http://localhost:5000/myFavorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: movie.original_name,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        releaseDate: firstDate.getFullYear(),
        overview: movie.overview
      })
    })
  }
  return(
    <a className="myListBtn" href='/home/my-list' onClick={()=>addMyList(movie)}><FaPlus /> Minha Lista</a>
  )
}