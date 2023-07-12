import React, { useState, useEffect } from 'react';
import Loading from "../../layout/Loading";
import Header from "../../layout/Header";
import { Outlet } from 'react-router-dom';
export default function Home({ movieList }) {

  const [loading, setLoading] = useState(true);

  //Função para simulação de loading
  useEffect(() => {
    const loadData = async () => {

      await new Promise((r) => setTimeout(r, 500));
      setLoading((loading) => !loading);
    };
    loadData();
  }, [])

  if (loading) {
    return <Loading />
  }

  else {
    return (
      <>
        <Header movieList={movieList}/>

        <Outlet />

        {movieList.length <= 0 &&
          <Loading />
        }
      </>
    )
  }
}