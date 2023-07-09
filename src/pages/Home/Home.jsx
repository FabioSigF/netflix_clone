import React, { useState, useEffect } from 'react';
import Loading from "../../layout/Loading";
import Header from "../../layout/Header";
import MenuBottom from '../../layout/MenuBottom';
import MovieInfo from '../../components/MovieInfo';
import { Outlet } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';
export default function Home({ movieList, movieInfo }) {

  const [loading, setLoading] = useState(true);

  const { screenSize } = useStateContext();

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
        {screenSize < 1200 &&
          <MenuBottom />
        }
      </>
    )
  }
}