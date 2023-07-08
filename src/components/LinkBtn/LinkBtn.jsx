import React from "react";
import { Link } from "react-router-dom";

export default function LinkBtn({title, customClass, to, onClick}){
  return(
    <Link to={to} className={`linkBtn ${customClass}`} onClick={onClick}>
      {title}
    </Link>
  )
}