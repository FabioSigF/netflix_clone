import React from "react";
import WatchBtn from "../WatchBtn";
import MyListBtn from "../MyListBtn";
export default function FeatureMovie({ item }) {

  //Seleciona gêneros dos filmes
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }


  //Limite de 200 caracteres para descrição do filme
  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }

  return (
    <section className="featured" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured__content flex">
        <h2 className="featured__title">{item.name ? item.name : item.original_title}</h2>

        <div className="featured__description">
          <div className="featured__details">
            <div className="featured__points">{item.vote_average.toFixed(1)} pontos</div>
            {(item.first_air_date || item.release_date) &&
              <div className="featured__year">{item.first_air_date ? new Date(item.first_air_date).getFullYear() : new Date(item.release_date).getFullYear()}</div>
            }
            {item.number_of_seasons &&
              <div className="featured__seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 && 's'}</div>
            }
            <div className="featured__synopsis">
              {description}
            </div>
          </div>
          <div className="featured__info">
            <div className="featured__genres">
              <strong>Gêneros: </strong>
              {genres.map((item, key) => (
                <span key={key}>{item}</span>
              ))}
            </div>
            <div className="featured__btns">
              <WatchBtn item={item} />
              <MyListBtn movie={item} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}