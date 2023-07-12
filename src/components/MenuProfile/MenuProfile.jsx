import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

//Hooks
import { useAuthentication } from "../../hooks/useAuthentication";
import { useStateContext } from "../../context/ContextProvider";

//Icons
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

export default function MenuProfile() {

  const { logout } = useAuthentication();
  const { screenSize, profiles, currentProfile, setCurrentProfile } = useStateContext();

  const [menuProfileOpen, setMenuProfileOpen] = useState(false);


  const currentProfileStorage = JSON.parse(localStorage.getItem("currentProfile"));
  const profilesStorage = JSON.parse(localStorage.getItem("profiles"));

  const navigate = useNavigate();

  function changeUser(item) {
    console.log(item);
    setCurrentProfile(item);
    localStorage.setItem("currentProfile", JSON.stringify(item));
    window.location.reload()
  }
  return (
    <div className={`menuUser__profile flex flex_ai_c ${menuProfileOpen ? 'active' : 'closed'}`} onClick={()=>setMenuProfileOpen(!menuProfileOpen)}>
      <a href={screenSize < 768  ? '#!' : `/accounts`} className="menuUser__icon">
        <img src={currentProfile ? currentProfile.avatar : currentProfileStorage.avatar} alt={currentProfileStorage.name} />
      </a>
      <div className="menuUser__profile_btn">
        <FaCaretDown />
      </div>
      <div className="menuProfile">
        <FaCaretUp className="menuProfile__caret" />
        <ul className="menuProfile__accounts">
          {(profiles && currentProfile)
            ?
            (profiles.map((item, key) => {
              if (item.id !== currentProfile.id) {
                return (
                  <li
                    className="menuProfile__account flex flex_ai_c"
                    key={key}
                    onClick={() => changeUser(item)}
                  >
                    <img src={item.avatar} alt="" className="menuProfile__account__img" />
                    <span className="menuProfile__account__name">{item.name}</span>
                  </li>
                )
              }
            }))
            :
            (profilesStorage.map((item, key) => {
              if (item.id !== currentProfileStorage.id) {
                return (
                  <li
                    className="menuProfile__account flex flex_ai_c"
                    key={key}
                    onClick={() => changeUser(item)}
                  >
                    <img src={item.avatar} alt="" className="menuProfile__account__img" />
                    <span className="menuProfile__account__name">{item.name}</span>
                  </li>
                )
              }
            })
            )}
          <li className="menuProfile__accountManage">
            <button onClick={() => navigate("/accounts")}>Gerenciar perfis</button>
          </li>
        </ul>
        <ul className="menuProfile__manage">
          <li className="menuProfile__manage__item">
            <a href="/browse" className="menuProfile__manage__link">Conta</a>
          </li>
          <li className="menuProfile__manage__item">
            <a href="/browse" className="menuProfile__manage__link">Centro de ajuda</a>
          </li>
          <li className="menuProfile__manage__item">
            <Link
              to={"/"}
              className="menuProfile__manage__link"
              onClick={logout}
            >
              Sair da Netflix
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
