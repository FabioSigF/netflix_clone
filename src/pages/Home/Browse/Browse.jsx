import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import FeatureMovie from "../../../components/FeatureMovie";
import MovieRow from "../../../components/MovieRow";

export default function Browse({ featureData, movieList, openMoreInfo, title }) {

  const [showGenres, setShowGenres] = useState(false);

  function toggleGenres() {
    setShowGenres(!showGenres)
  }

  function clickOutside(e) {
    const genres = document.querySelector('[data-genres]');
    console.log(e.target)
    if (!genres.contains(e.target)) {
      setShowGenres(false)
    }
  }

  return (
    <>
      {title &&
        <div className="browse__details flex flex_ai_c" data-genres>
          <h2 className="browse__title">{title}</h2>
          <div className="brose__genres__container">
            <div className="browse__genres flex flex_ai_c" onClick={toggleGenres}>
              <span className="browse__genres__item">Gêneros</span>
              <FaCaretDown />
            </div>
            <div className="browse__genres__dropdown"  onClick={(e)=>clickOutside(e)}>
              {showGenres &&
                <ul className="browse__genres__list flex">
                  {movieList.map((item, key) => (
                    <li className="browse__genres__item" key={key}>
                      <Link to="/home" className="browse__genres__link">{item.title}</Link>
                    </li>
                  ))}
                </ul>
              }
            </div>
          </div>
        </div>
      }
      {featureData &&
        <FeatureMovie
          item={featureData}
        />
      }
      <section className={`lists ${featureData ? '' : 'lists--ajust'}`}>
        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
            onClickItem={openMoreInfo}
          />
        ))}
      </section>
    </>
  )
}