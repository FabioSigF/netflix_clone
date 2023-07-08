import React, { useState } from "react";
import { FaCheck, FaPlus, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { BiX } from 'react-icons/bi'
import WatchBtn from "../WatchBtn";

export default function MovieInfo({ movie }) {

  const [movieAdd, setMovieAdd] = useState(false);

  let firstDate = new Date(movie.first_air_date).getFullYear();
  let releaseDate = new Date(movie.release_date).getFullYear();
  let description = movie.overview;
  if (description.length > 410) {
    description = description.substring(0, 410) + '...';
  }

  console.log(movie)
  function closeMovieInfo() {
    setMovieAdd(false)
    const moreInfo = document.querySelector('.movieInfo')
    moreInfo.classList.remove('open')
  }

  function addMyList(movie) {
    const title = document.querySelector('.movieInfo__title').textContent;
    const releaseDate = document.querySelector('.movieInfo__date').textContent;
    setMovieAdd(true)
    return fetch(`http://localhost:5000/myFavorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: title,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        releaseDate: releaseDate,
        overview: movie.overview
      })
    })
  }

  function removeMyList(id) {
    closeMovieInfo()
    return fetch(`http://localhost:5000/myFavorites/${id}`, {
      method: 'DELETE'
    }).then(resp => {
      if (!resp.ok) {
        throw new Error('Não foi possível remover o cliente!')
      }
    })
  }

  return (
    <div className="movieInfo open">
      <article className="movieInfo__container">
        <div className="movieInfo__preview flex" style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}>
          <div className="movieInfo__preview__panel">
            <h2 className="movieInfo__title">{movie.name ? movie.name : movie.original_title}</h2>
            <div className="movieInfo__btns flex">
              <WatchBtn />
              {movie.genre_ids &&
                <>{movieAdd
                  ? (
                    <div className="movieInfo__btn flex">
                      <FaCheck />
                    </div>
                  )
                  : (
                    <div className="movieInfo__btn flex" onClick={() => addMyList(movie)}>
                      <FaPlus />
                    </div>
                  )}
                </>
              }
              {movie.genre_ids === undefined &&
                <div className="movieInfo__btn flex" onClick={() => removeMyList(movie.id)}>
                  <BiX />
                </div>
              }
              <div className="movieInfo__btn flex">
                <FaThumbsUp />
              </div>
              <div className="movieInfo__btn flex">
                <FaThumbsDown />
              </div>
            </div>
          </div>
        </div>
        <div className="movieInfo__close flex" onClick={closeMovieInfo}>
          <BiX />
        </div>
        <div className="movieInfo__about">
          <div className="movieInfo__content">
            <div className="movieInfo__bar">
              <span className="movieInfo__points">{movie.vote_average} pontos</span>
              {movie.genre_ids &&
                <span className="movieInfo__date">
                  {movie.first_air_date ? firstDate : releaseDate}
                </span>
              }
              {movie.genre_ids === undefined &&
                <span className="movieInfo__date">
                  {movie.releaseDate}
                </span>
              }
            </div>
            <p className="movieInfo__description">
              {description}
            </p>
          </div>
        </div>
      </article >
    </div>
  )
}