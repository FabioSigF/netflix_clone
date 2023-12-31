import React from "react";
import FeatureMovie from "../../../components/FeatureMovie";
import MovieRow from "../../../components/MovieRow";

export default function Browse({ featureData, movieList, title }) {


  return (
    <>
      {title &&
        <div className="browse__details flex flex_ai_c" data-genres>
          <h2 className="browse__title">{title}</h2>
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
          />
        ))}
      </section>
    </>
  )
}