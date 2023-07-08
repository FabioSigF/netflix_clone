import React from 'react';
import netflixLoading from '../../../src/imgs/netflix-loading.gif';

export default function Loading() {
  return (
    <div className="loading">
      <img src={netflixLoading} alt="Carregando.." />
    </div>
  )
}