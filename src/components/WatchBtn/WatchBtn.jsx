import React from "react";
import { FaPlay } from 'react-icons/fa';

export default function WatchBtn(item){
  return(
    <a className="watchBtn" href={`watch/${item.id}`}><FaPlay />Assistir</a>
  )
}