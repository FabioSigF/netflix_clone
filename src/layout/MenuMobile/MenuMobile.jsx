import React, { useState } from "react";
import Logo from "../../components/Logo";
import Search from "../../components/Search/Search";
import { NavLink } from "react-router-dom";
import MenuProfile from "../../components/MenuProfile/MenuProfile";

export default function MenuMobile() {

  const currentProfileStorage = JSON.parse(localStorage.getItem("currentProfile"));
  const [menuFixed, setMenuFixed] = useState("");

  function scrollBg() {
    if (window.scrollY > 90) {
      setMenuFixed('menuMobile--fixed');
    } else {
      setMenuFixed('');
    }
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState("");

  function toggleMenu() {
    if (menuOpen !== true) {
      setMenuOpen(true);
      setMenuStyle('open');
    } else if (menuOpen === true) {
      setMenuOpen(false);
      setMenuStyle('');
    }
  }

  window.addEventListener('scroll', scrollBg)
  return (
    <header className="mb_header flex flex_ai_c" data-header>
      <div className="mb_header__bar">
        <Logo />
        <div className="mb_header__icons flex flex_ai_c">
          <Search />
          <MenuProfile />
        </div>
      </div>
      <nav className={`menuMobile ${menuFixed}`}>
        <ul className="menuMobile__list">
          <li className="menuMobile__item">
            <a href="/browse" className="menuMobile__link">Início</a>
          </li>
          <li className="menuMobile__item">
            <button type="button" className="menuMobile__link" onClick={toggleMenu}>Categorias</button>
          </li>
          <li className="menuMobile__item">
            <a href="/browse/my-list" className="menuMobile__link">Minha Lista</a>
          </li>
          <div className={`categories_container flex flex_ai_c ${menuStyle}`}>
            <ul className="categories__list flex flex_ai_c" data-list>
              <li className="categories__item">
                <NavLink to="/browse/series" className="categories__link" onClick={toggleMenu} >Series</NavLink>
              </li>
              <li className="categories__item">
                <NavLink to="/browse/movies" className="categories__link" onClick={toggleMenu} >Filmes</NavLink>
              </li>
              <li className="categories__item">
                <NavLink to="/browse/latest" className="categories__link" onClick={toggleMenu} >Últimos lançamentos</NavLink>
              </li>
              <li className="categories__item">
                <NavLink to="/browse/kids" className="categories__link" onClick={toggleMenu} >Infantil</NavLink>
              </li>
            </ul>
            <div className='categories__close flex' onClick={toggleMenu}>
              <span></span>
            </div>
          </div>
        </ul>
      </nav>

    </header>
  )
}