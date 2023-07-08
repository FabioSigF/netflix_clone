import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useStateContext } from '../../context/ContextProvider'

export default function Search() {

  const [openMenu, setOpenMenu] = useState(false)

  const { searchString, setSearchString } = useStateContext();

  const navigate = useNavigate()

  function handleSearchChange(e) {
    setSearchString(e.target.value);
    if (e.target.value.length >= 2) {
      navigate("search")
    } else if (e.target.value.length <= 1) {
      navigate("/browse")
    }
  }

  function toggleMenu() {
    const search = document.querySelector('[data-search]');
    if (openMenu === false) {
      setOpenMenu(!openMenu)
      search.classList.add('open')
      document.addEventListener("mousedown", clickOutside)
    } else {
      search.classList.remove('open')
      setOpenMenu(!openMenu)
      document.removeEventListener("mousedown", clickOutside)
    }
  }

  function clickOutside(e) {
    const search = document.querySelector('[data-search]');
    if (!search.contains(e.target)) {
      search.classList.remove('open')
      setOpenMenu(false)
    }
  }
  return (
    <div className="search" data-search>
      {!openMenu
        ?
        (<button className='search__btn' onClick={toggleMenu}>
          <FaSearch />
        </button>)
        :
        (<div className='search__bar' onClick={clickOutside}>
          <button className='search__bar__icon' onClick={toggleMenu} >
            <FaSearch />
          </button>
          <input type="text" className='search__bar__input' placeholder='Título, gênero' onChange={(e) => handleSearchChange(e)} value={searchString} name="search" />
        </div>)
      }
    </div>
  )
}
