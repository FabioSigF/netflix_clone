import React, { useEffect, useState } from "react";
import { FaCheck, FaPlus, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { BiX } from 'react-icons/bi'
import WatchBtn from "../WatchBtn";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";


export default function MovieInfo({ movie, openState }) {

  const [movieAdd, setMovieAdd] = useState(false);

  const { insertDocument, response } = useInsertDocument("myList");
  const { deleteDocument } = useDeleteDocument("myList");
  const { documents: movies } = useFetchDocuments("myList");

  const currentProfile = JSON.parse(localStorage.getItem("currentProfile")).id;

  const addMyList = async (e) => {
    e.preventDefault()

    try {
      const title = document.querySelector('.movieInfo__title').textContent;
      const releaseDate = document.querySelector('.movieInfo__date').textContent;
      setMovieAdd(true)
      await insertDocument({
        name: title,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        releaseDate: releaseDate,
        overview: movie.overview,
        uid: JSON.parse(localStorage.getItem("currentProfile")).id,
        movieId: movie.id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  let firstDate = new Date(movie.first_air_date).getFullYear();
  let releaseDate = new Date(movie.release_date).getFullYear();
  let description = movie.overview;
  if (description.length > 410) {
    description = description.substring(0, 410) + '...';
  }

  function closeMovieInfo() {
    openState(false);
  }

  const removeMyList = (e) => {
    e.preventDefault();
    if (movies) {
      movies.forEach((item) => {
        if (((item.movieId === movie.id) || (item.movieId === movie.movieId)) && (item.uid === currentProfile)) {
          deleteDocument(item.id)
        }
      })
    }
    setMovieAdd(false);
  }

  const checkIfMovieIsInMyList = () => {
    movies.forEach((item) => {
      console.log(movie)
      if (((item.movieId === movie.id) || (item.movieId === movie.movieId)) && (item.uid === currentProfile)) {
        setMovieAdd(true);
      }
    })
  }

  useEffect(() => {
    if (movies) {
      console.log(currentProfile)
      checkIfMovieIsInMyList();
    }
  }, [movies])

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
              {movieAdd
                ? (
                  <div className="movieInfo__btn flex" onClick={(e) => removeMyList(e)}>
                    <FaCheck />
                  </div>
                )
                : (
                  <div className="movieInfo__btn flex" onClick={(e) => addMyList(e)}>
                    <FaPlus />
                  </div>
                )}
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