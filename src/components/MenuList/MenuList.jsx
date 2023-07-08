import React from 'react'
import { NavLink } from 'react-router-dom';

export default function MenuList({ data }) {

  const activeStyle = {
    fontWeight: "bold"
  }

  return (
    <ul className="menuList">
      {data.map((item, key) => (
        <li className='menuList__item' key={key}>
          <NavLink to={item.link} className="menuList__link" style={({ isActive }) => isActive ? activeStyle : undefined}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  )
}
