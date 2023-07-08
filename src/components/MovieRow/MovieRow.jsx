import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function MovieRow({ title, items, onClickItem }) {

  const [scrollX, setScrollX] = useState(0)

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 1.15);
    if (x >= 0) {
      x = 0
    }
    setScrollX(x)
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 1.15);
    let listW = (items.results.length * 150);
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x)
  }

return (
  <>
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow_left" onClick={handleLeftArrow}>
        <FaChevronLeft />
      </div>
      <div className="movieRow_right" onClick={handleRightArrow}>
        <FaChevronRight />
      </div>
      <div className="movieRow__listarea">
        <div className="movieRow__list" style={{ marginLeft: scrollX }}>
          {items.results.length > 0 && items.results.map((item, key) => {
            if (item.poster_path !== null) {
              return (
                <div key={key} className="movieRow__item" onClick={() => onClickItem(item)}>
                  <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name} />
                </div>
              )
            } else {
              return (
                <div key={key} className="movieRow__item">
                  <div>
                    <p>
                      {item.original_name}
                    </p>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  </>
)
}