import React from "react";
import Logo from "../../components/Logo";
import user from '../../imgs/user.png';
import { FaSearch, FaTv } from 'react-icons/fa';
import Categories from "./Categories";

export default function MenuMobile({ categories }) {
  
  function scrollBg() {
    const menu = document.querySelector('[data-menu]');
    if (window.scrollY > 90) {
      menu.classList.add('menuMobile--fixed');
    } else {
      menu.classList.remove('menuMobile--fixed');
    }
  }

  window.addEventListener('scroll', scrollBg)
  return (
    <header className="mb_header flex flex_ai_c" data-header>
      <div className="mb_header__bar">
        <Logo />
        <div className="mb_header__icons flex flex_ai_c">
          <a href="/" className="mb_header__tv">
            <FaTv />
          </a>
          <a href="/" className="mb_header__search">
            <FaSearch />
          </a>
          <a href="/" className="mb_header__profile">
            <img src={user} alt="Netflix User" />
          </a>
        </div>
      </div>
      <nav className="menuMobile" data-menu>
        <ul className="menuMobile__list">
          <li className="menuMobile__item">
            <a href="/" className="menuMobile__link">Séries</a>
          </li>
          <li className="menuMobile__item">
            <a href="/" className="menuMobile__link">Filmes</a>
          </li>
          <Categories
            list={categories.map((item) => (
              {
                nome: item.title,
                href: `/${item.slug}`
              }
            ))}
          />
        </ul>
      </nav>

    </header>
  )
}