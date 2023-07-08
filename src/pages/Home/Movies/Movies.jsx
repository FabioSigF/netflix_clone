import React from 'react'
import FeatureMovie from '../../../components/FeatureMovie'
import MovieRow from '../../../components/MovieRow'

export default function Movies({openMoreInfo, featureData, windowWidth, moviesList}) {
  return (
    <>
      <FeatureMovie
        item={featureData}
        windowWidth={windowWidth}
      />

      <section className="lists">
        {moviesList.map((item, key) => (
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
