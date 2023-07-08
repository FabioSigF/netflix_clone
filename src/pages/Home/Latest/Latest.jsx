import React from 'react'
import MovieRow from '../../../components/MovieRow'

export default function Latest({ openMoreInfo, latestList }) {
  return (
    <>
      <section className='latest'>
        <section className="lists">
          {latestList.map((item, key) => (
            <MovieRow
              key={key}
              title={item.title}
              items={item.items}
              onClickItem={openMoreInfo}
            />
          ))}
        </section>
      </section>
    </>
  )
}
