import React from "react";
import { FaHome, FaGamepad, FaPlaneArrival, FaSmileBeam, FaArrowAltCircleDown } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function MenuBottom() {

  const menuItemsData = [
    { name: 'Início', icon: <FaHome className="menuBottom__icon" />, href: '/home', id: 'menuBottom_item_1' },
    { name: 'Jogos', icon: <FaGamepad className="menuBottom__icon" />, href: '/home', id: 'menuBottom_item_2' },
    { name: 'Em breve', icon: <FaPlaneArrival className="menuBottom__icon" />, href: '/home', id: 'menuBottom_item_3' },
    { name: 'Risadas', icon: <FaSmileBeam className="menuBottom__icon" />, href: '/home', id: 'menuBottom_item_4' },
    { name: 'Download', icon: <FaArrowAltCircleDown className="menuBottom__icon" />, href: '/home', id: 'menuBottom_item_5' },
  ]

  
  function linkAtivo(e, id) {
    const menuItems = document.querySelectorAll('.menuBottom__item');
    menuItems.forEach((item) => (
      item.classList.remove('active')
    ))
    e.preventDefault()
    document.querySelector(`#${id}`).classList.add('active')
  }

  return (
    <div className="menuBottom__container flex flex_ai_c ">
      <ul className="menuBottom__items flex flex_ai_c flex_jc_sb">
        {
          menuItemsData.map((item, key) => (
            <li className={`menuBottom__item ${item.name === 'Início' && 'active'}`} id={item.id} onClick={(e)=>linkAtivo(e,item.id)} key={key}>
              <Link to={item.href} className="menuBottom__link flex ">
                {item.icon}
                <span className="menuBottom__title">{item.name}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}