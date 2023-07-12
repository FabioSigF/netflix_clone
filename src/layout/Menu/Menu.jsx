import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from '../../components/Logo';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import Search from "../../components/Search";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useStateContext } from "../../context/ContextProvider";
import Notification from "../../components/Notification/Notification";

export default function Menu() {

  const { screenSize, profiles, currentProfile, setCurrentProfile } = useStateContext();
  const { logout } = useAuthentication();

  const currentProfileStorage = JSON.parse(localStorage.getItem("currentProfile"));
  const profilesStorage = JSON.parse(localStorage.getItem("profiles"));

  const navigate = useNavigate();

  function changeUser(item) {
    console.log(item);
    setCurrentProfile(item);
    localStorage.setItem("currentProfile", JSON.stringify(item));
    window.location.reload()
  }

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
        <div className="menu__user__profile flex flex_ai_c">
          <a href="/accounts" className="menu__user__icon">
            <img src={currentProfile ? currentProfile.avatar : currentProfileStorage.avatar} alt={currentProfileStorage.name} />
          </a>
          <div className="menu__user__profile_btn">
            <FaCaretDown />
          </div>
          <div className="menu__profile">
            <FaCaretUp className="menu__profile__caret" />
            <ul className="menu__profile__accounts">
              {(profiles && currentProfile)
                ?
                (profiles.map((item, key) => {
                  if (item.id !== currentProfile.id) {
                    return (
                      <li
                        className="menu__profile__account flex flex_ai_c"
                        key={key}
                        onClick={() => changeUser(item)}
                      >
                        <img src={item.avatar} alt="" className="menu__profile__account__img" />
                        <span className="menu__profile__account__name">{item.name}</span>
                      </li>
                    )
                  }
                }))
                :
                (profilesStorage.map((item, key) => {
                  if (item.id !== currentProfileStorage.id) {
                    return (
                      <li
                        className="menu__profile__account flex flex_ai_c"
                        key={key}
                        onClick={() => changeUser(item)}
                      >
                        <img src={item.avatar} alt="" className="menu__profile__account__img" />
                        <span className="menu__profile__account__name">{item.name}</span>
                      </li>
                    )
                  }
                })
                )}
              <li className="menu__profile__accountManage">
                <button onClick={() => navigate("/accounts")}>Gerenciar perfis</button>
              </li>
            </ul>
            <ul className="menu__profile__manage">
              <li className="menu__profile__manage__item">
                <a href="/browse" className="menu__profile__manage__link">Conta</a>
              </li>
              <li className="menu__profile__manage__item">
                <a href="/browse" className="menu__profile__manage__link">Centro de ajuda</a>
              </li>
              <li className="menu__profile__manage__item">
                <Link
                  to={"/"}
                  className="menu__profile__manage__link"
                  onClick={logout}
                >
                  Sair da Netflix
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </header>
  )
}