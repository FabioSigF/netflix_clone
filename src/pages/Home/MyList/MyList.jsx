import React from "react"
import Container from '../../../auxiliar/Container'
import dataMovies from '../../../dataBase/clients.json';
export default function MyList({setMovieInfo}) {
  return (
    <Container>
      <section className="myList">
        <h2 className="myList__title">Minha Lista</h2>
        <ul className="myList__list flex flex_ai_c">
          {
            dataMovies.myFavorites.map((item, key) => (
              <li key={key} className="myList__item" onClick={() => setMovieInfo(item)} >
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} className="myList__img" />
              </li>
            ))
          }
        </ul>
      </section>
    </Container>
  )
}