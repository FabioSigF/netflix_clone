import React, { useState } from 'react'
import MovieInfo from '../MovieInfo/MovieInfo';

export default function CardMovie({ movie }) {

  const [openMovieInfo, setOpenMovieInfo] = useState(false);

  function openMoreInfo(item) {
    setOpenMovieInfo(true);
    const movieInfo = document.querySelector('.movieInfo')
    movieInfo.classList.add('open')
  }

  return (
    <>
      {openMovieInfo &&
        <MovieInfo movie={movie} openState={setOpenMovieInfo}/>
      }
      <div className="movieRow__item" onClick={() => openMoreInfo(movie)}>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_name} />
      </div>
    </>
  )
}
