import React, { useState } from 'react';

export default function Categories({ list }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const item = document.querySelectorAll('.categories__link[id]');
  
  
  function linkAtivo(e, id) {
    item.forEach(item => {
      item.classList.remove('active')
    })
    e.preventDefault()
    item[id + 1].classList.add('active')
  }

  function toggleMenu() {
    const container = document.querySelector('.categories_container');
    if (menuOpen !== true) {
      container.classList.add('open');
      setMenuOpen(true);
    } else if (menuOpen === true) {
      container.classList.remove('open');
      setMenuOpen(false);
    }
  }

  return (
    <>
      <li className="menuMobile__item">
        <button type="button" className="menuMobile__link" onClick={toggleMenu}>Categorias</button>
      </li>
      <div className="categories_container flex flex_ai_c">
        <ul className="categories__list flex flex_ai_c" data-list>
          <li className="categories__item">
            <a href="/home" className='categories__link active' id='0'>Início</a>
          </li>
          {list.map((item, id) => (
            <li className="categories__item" key={id}>
              <a href={item.href} className="categories__link" id={id + 1} onClick={(e) => linkAtivo(e, id)}>{item.nome}</a>
            </li>
          ))}
        </ul>
        <div className='categories__close flex' onClick={toggleMenu}>
          <span></span>
        </div>
      </div>
    </>
  )
}