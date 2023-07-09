import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//Components
import Home from './pages/Home'
import Tmdb from "./Tmdb.js";
import Accounts from "./pages/Accounts";
import Initial from "./pages/Initial";
import Login from "./pages/Login";
import NewClient from "./pages/NewClient";
import CreatePassword from "./pages/NewClient/CreatePassword";
import ConfigCard from "./pages/NewClient/ConfigCard";
import Congratulations from "./pages/NewClient/Congratulations";
import MyList from "./pages/Home/MyList";
import Browse from "./pages/Home/Browse";
import Footer from "./layout/Footer";
import SearchPage from "./pages/Home/SearchPage";
import { onAuthStateChanged } from "firebase/auth";
import { useStateContext } from "./context/ContextProvider";
import { useAuthentication } from "./hooks/useAuthentication";


export default function App() {
  //Context
  const { user, setUser, screenSize, setScreenSize } = useStateContext()


  //home
  const [featureData, setFeatureData] = useState(null);
  const [movieList, setMovieList] = useState([]);
  //serie
  const [featureSerieData, setFeatureSerieData] = useState(null);
  const [seriesList, setSeriesList] = useState([]);
  //filme
  const [featureMovieData, setFeatureMovieData] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  //kids
  const [featureKidsData, setFeatureKidsData] = useState(null);
  const [kidsMoviesList, setKidsMoviesList] = useState([]);
  //latest
  const [latestList, setLatestList] = useState([]);

  const [allList, setAllList] = useState([]);

  const [searchChange, setSearchChange] = useState();

  //Função para captar o tamanho da tela e enviar ao context
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)

  }, []);

  //Função para pegar lista de filmes e séries
  useEffect(() => {

    const loadAll = async () => {
      // Pegando a lista principal
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o feature
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo);

      //Pegando lista de séries
      let serieList = await Tmdb.getSeriesList();
      setSeriesList(serieList)

      //Pegando o feature de séries
      let actionSeries = serieList.filter(i => i.slug === 'action');
      let randomChosenSeries = Math.floor(Math.random() * (actionSeries[0].items.results.length - 1));
      console.log(actionSeries[0].items.results)
      let chosenSeries = actionSeries[0].items.results[randomChosenSeries];
      let chosenInfoSeries = await Tmdb.getMovieInfo(chosenSeries.id, 'tv')
      setFeatureSerieData(chosenInfoSeries);

      //Pegando lista de filmes
      let moviesList = await Tmdb.getMoviesList();
      setMoviesList(moviesList)

      //Pegando o feature de filmes
      let actionMovies = moviesList.filter(i => i.slug === 'action');
      let randomChosenMovies = Math.floor(Math.random() * (actionMovies[0].items.results.length - 1));
      console.log(actionMovies[0].items.results)
      let chosenMovies = actionMovies[0].items.results[randomChosenMovies];
      let chosenInfoMovies = await Tmdb.getMovieInfo(chosenMovies.id, 'movie')
      setFeatureMovieData(chosenInfoMovies);

      //Pegando lista de filmes populares
      let latestList = await Tmdb.getLatestList();
      setLatestList(latestList)

      //Pegando lista de filmes
      let allMovieList = await Tmdb.getAllList();
      setAllList(allMovieList)

      //Pegando lista infantil
      let kidsList = await Tmdb.getKidsList();
      setKidsMoviesList(kidsList)

      //Pegando o feature infantil
      let kidsMovies = kidsList.filter(i => i.slug === 'family');
      let randomChosenKids = Math.floor(Math.random() * (kidsMovies[0].items.results.length - 1));
      console.log(kidsMovies[0].items.results)
      let chosenKids = kidsMovies[0].items.results[randomChosenKids];
      let chosenInfoKids = await Tmdb.getMovieInfo(chosenKids.id, 'movie')
      setFeatureKidsData(chosenInfoKids);
    }

    loadAll();
  }, []);

  //Auth
  const { auth } = useAuthentication()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  }, [auth])

  const [movieInfo, setMovieInfo] = useState('')

  function openMoreInfo(item) {
    setMovieInfo(item)
    const movieInfo = document.querySelector('.movieInfo')
    movieInfo.classList.add('open')
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Initial /> : <Navigate to="/accounts"/>} />
        <Route
          path="/accounts"
          element={<Accounts/> }
        />
        <Route path="/browse"
          element={
          localStorage.getItem("currentProfile") ?
          <Home
            movieList={movieList}
            movieInfo={movieInfo}
          />
          : <Navigate to="/accounts" />
         }
        >
          <Route path=""
            element={<Browse
              featureData={featureData}
              windowWidth={screenSize}
              movieList={movieList}
              openMoreInfo={openMoreInfo}
            />} />
          <Route path="series" element={<Browse
            title={"Séries"}
            featureData={featureSerieData}
            windowWidth={screenSize}
            movieList={seriesList}
            openMoreInfo={openMoreInfo}
          />} />
          <Route path="movies" element={<Browse
            title={"Filmes"}
            featureData={featureMovieData}
            windowWidth={screenSize}
            movieList={moviesList}
            openMoreInfo={openMoreInfo}
          />} />
          <Route path="latest" element={<Browse
            windowWidth={screenSize}
            movieList={latestList}
            openMoreInfo={openMoreInfo}
          />} />
          <Route path="kids" element={<Browse
            title={"Infantil"}
            featureData={featureKidsData}
            windowWidth={screenSize}
            movieList={kidsMoviesList}
            openMoreInfo={openMoreInfo}
          />} />

          <Route path="my-list" element={user ? <MyList setMovieInfo={openMoreInfo} /> : <Navigate to="/login" />} />
          <Route path="search" element={<SearchPage movieList={allList} searchChange={searchChange} setMovieInfo={openMoreInfo} />} />
        </Route>

        {/*USUÁRIO LOGADO */}
        <Route path="/accounts" />

        {/*USUÁRIO NÃO LOGADO */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/browse" />} />
        <Route path="/new-client" element={!user ? <NewClient /> : <Navigate to="/browse" />}>
          <Route index path="" element={!user ? <ConfigCard /> : <Navigate to="/browse" />} />
          <Route path="config" element={!user ? <ConfigCard /> : <Navigate to="/browse" />} />
          <Route path="password" element={!user ? <CreatePassword /> : <Navigate to="/browse" />} />
          <Route path="congrat" element={!user ? <Congratulations /> : <Navigate to="/browse" />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
