import React, { useEffect, useState } from "react"
import Container from '../../../auxiliar/Container'
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";
import CardMovie from "../../../components/CardMovie/CardMovie";
export default function MyList() {

  const { documents: movies } = useFetchDocuments("myList");
  const [myList, setMyList] = useState([]);

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
  }, [movies])

  return (
    <Container>
      <section className="myList">
        <h2 className="myList__title">Minha Lista</h2>
        <ul className="myList__list flex flex_ai_c">
          {myList &&
            myList.map((movie, key) => (
              <CardMovie movie={movie} key={key} />
            ))
          }
        </ul>
      </section>
    </Container>
  )
}