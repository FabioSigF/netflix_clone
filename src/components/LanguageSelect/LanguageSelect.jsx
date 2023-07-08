import React from 'react'
import { FaGlobe, FaSortDown } from 'react-icons/fa'

export default function LanguageSelect({customClass}) {

  return (
    <div className={`lang ${customClass}`}>
      <FaGlobe className="lang__iconGlobe" />
      <select name="language" className="lang__list">
        <option className="lang__item" value="Português">Português</option>
        <option className="lang__item" value="English">English</option>
      </select>
      <FaSortDown className="lang__iconArrow" />
    </div>
  )
}