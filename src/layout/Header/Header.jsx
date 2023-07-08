import { useStateContext } from "../../context/ContextProvider";
import MenuMobile from "../../layout/MenuMobile";
import Menu from "../Menu";

export default function Header({movieList}){

  const { screenSize } = useStateContext();
  return(
    <>
      {screenSize < 1024 
      ? 
      <MenuMobile categories={movieList} /> 
      : 
      <Menu />}
    </>
  )
}