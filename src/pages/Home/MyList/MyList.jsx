import React, { useEffect } from "react"
import Container from '../../../auxiliar/Container'
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";
import CardMovie from "../../../components/CardMovie/CardMovie";
export default function MyList() {

  const {documents: movies} = useFetchDocuments("myList");

  const filterMovies = () => {
    if(movies){
      movies.filter(movie => movie.uid !== JSON.parse(localStorage.getItem("currentProfile")).id)
    }
  }

  useEffect(() => {
    filterMovies();
  },[movies])
  return (
    <Container>
      <section className="myList">
        <h2 className="myList__title">Minha Lista</h2>
        <ul className="myList__list flex flex_ai_c">
          {movies &&
            movies.map((movie, key) => (
              <CardMovie movie={movie} key={key} />
            ))
          }
        </ul>
      </section>
    </Container>
  )
}