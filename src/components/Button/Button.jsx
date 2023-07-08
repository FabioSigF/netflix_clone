import React from "react";

export default function LinkBtn({title, onClick, type}){

  return(
    <button type={type} className="linkBtn linkBtn--main" onClick={onClick}>{title}</button>
  )
}