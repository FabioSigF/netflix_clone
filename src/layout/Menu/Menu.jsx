import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../components/Logo';

import Search from "../../components/Search";
import { useStateContext } from "../../context/ContextProvider";
import Notification from "../../components/Notification/Notification";
import MenuProfile from "../../components/MenuProfile/MenuProfile";

export default function Menu() {

  const { screenSize } = useStateContext();

  function scrollBg() {
    const header = document.querySelector('.header');

    if (screenSize > 1023 && window.scrollY > 30) {
      header.style.background = 'rgb(20,20,20)';
    } else if (screenSize > 1023) {
      header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 30%, rgba(20,20,20,0))';
    }
  }
  window.addEventListener('scroll', scrollBg)

  return (
    <header className="header" data-menu>
      <nav className="menu">
        <Logo />
        <ul className="menu__list">
          <li className='menu__item'>
            <NavLink to="/browse" className="menu__link" end>Início</NavLink>
          </li>
          <li className='menu__item'>
            <NavLink to="/browse/series" className="menu__link">Séries</NavLink>
          </li>
          <li className='menu__item'>
            <NavLink to="/browse/movies" className="menu__link">Filmes</NavLink>
          </li>
          <li className='menu__item'>
            <NavLink to="/browse/latest" className="menu__link">Bombando</NavLink>
          </li><li className='menu__item'>
            <NavLink to="/browse/my-list" className="menu__link">Minha Lista</NavLink>
          </li>
        </ul>
      </nav>
      <div className="menu__user">
        <Search />
        <div className="menu__kids">
          <NavLink to="/browse/kids">Infantil</NavLink>
        </div>
        <Notification />
        <MenuProfile />
      </div>

    </header>
  )
}