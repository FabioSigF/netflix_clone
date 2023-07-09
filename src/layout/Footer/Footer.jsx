import { Link } from "react-router-dom";
import Container from "../../auxiliar/Container";
import footerData from "./footerData.js";
import MyFooter from "../MyFooter";
export default function Footer(){

  const data = footerData.footerLinksData;

  return(
    <footer className="footer">
      <Container>
        <h3 className="footer__title">Dúvidas? Ligue <a href="tel:0800-777-4444">0800-777-4444</a></h3>
        <ul className="footer__list flex">
          {data.map((item, key)=> (
            <li className="footer__item" key={key}>
              <Link to="#!" className="footer__link">{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="footer__others">
          <span className="footer__item">Netflix Brasil</span>
        </div>
      </Container>
      <MyFooter />
    </footer>
  )
}