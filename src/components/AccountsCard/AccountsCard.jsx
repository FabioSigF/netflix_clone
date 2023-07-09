import React from "react";
import { Link } from "react-router-dom";

export default function AccountsCard({link, name, avatar, children, customClass, onClick}) {
  return (
    <li className='accountsCard__item'>
      <Link 
        to={link} 
        className={`accountsCard__avatar ${customClass}`}
        style={{backgroundImage: `url(${avatar})`}}
        onClick={onClick}
      >
        {children}
      </Link>
      <span className='accountsCard__name'>{name}</span>
    </li>
  )
} 