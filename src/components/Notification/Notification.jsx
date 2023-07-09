import React, { useEffect, useState } from 'react'
import { FaBell } from 'react-icons/fa'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

export default function Notification() {

  const { documents: movies } = useFetchDocuments("myList");
  const [myList, setMyList] = useState([]);
  const [currentProfileStorage, setCurrentProfileStorage] = useState()

  const filterMovies = () => {
    setMyList([]);
    if (movies) {
      movies.forEach((movie) => {
        if(movie.uid === JSON.parse(localStorage.getItem("currentProfile")).id)
        {
          setMyList(current => [...current, movie]);
        }
      })
    }
  }

  useEffect(() => {
    filterMovies();
    setCurrentProfileStorage(JSON.parse(localStorage.getItem("currentProfile")).id);
  }, [movies, currentProfileStorage])


  return (
    <div className="menu__notification">
      <FaBell />
      {myList && myList.length > 0 &&
        <div className="menu__notification__alert flex flex_ai_c">{myList.length}</div>
      }
      {myList &&
        <ul className="menu__notification__card">
          {myList.map((item, key) => (
            <li className="menu__notification__item" key={key}>
              <a href="/browse/my-list" className="menu__notification__link flex flex_ai_c">
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.name} className="menu__notification__img" />
                <div className="menu__notification__text">
                  <span className="menu__notification__about">Assista agora</span>
                  <span className="menu__notification__title">{item.name}</span>
                </div>
              </a>
            </li>
          ))
          }
        </ul>
      }
    </div>
  )
}
