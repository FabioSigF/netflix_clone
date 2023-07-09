import React from 'react';
import Container from '../../../auxiliar/Container';
import { useStateContext } from '../../../context/ContextProvider';
import CardMovie from '../../../components/CardMovie/CardMovie';
export default function SearchPage({ movieList, setMovieInfo }) {

  const { searchString } = useStateContext();

  function searchMovies() {
    let movies = [];
    let cont = 0;
    movieList.forEach((item) => {
      item.items.results.filter((value) => {
        if (searchString === undefined) {
          return value
        } else if (value.name && (value.name.toLowerCase().includes(searchString.toLowerCase()))) {
          return value

        } else if (value.title && (value.title.toLowerCase().includes(searchString.toLowerCase()))) {
          return value
        }
        return null;
      }).forEach((item) => {
        cont = 0;
        //Verifica se tem filmes repetidos
        movies.forEach((movie) => {
          if(movie.name === item.name)
          {
            cont++;
          }
        })
        if(cont === 0){
          movies.push(item);
        }
      })
    })
    return movies
  }

  return (
    <section className='searchPage'>
      <div className='searchPage__results--error'>
        <p>Não encontramos resultados para "{searchString}".</p>
        <span>Sugestões:</span>
        <ul>
          <li>Tente palavras-chave diferentes</li>
        </ul>
      </div>
      <Container>
        <h2 className="searchPage__title">Procurar por: "{searchString}"</h2>
        {searchString &&
          <ul className='searchPage__results'>
            {searchMovies().map((item, key) => (
              <CardMovie movie={item}/>
            ))}
          </ul>
        }
      </Container>
    </section>
  )
}
