import React from "react";
import LinkBtn from "../../../components/LinkBtn";
import { FaCheckCircle } from "react-icons/fa";
import Container from "../../../auxiliar/Container";
import Logo from "../../../components/Logo/Logo";

export default function CreatePassword() {
  return (
    <>
      <header className="newClient__header">

        <Container customClass={'newClient__header__container flex flex_ai_c flex_jc_sb'}>
          <div className="newClient__logo">
            <Logo />
          </div>
          <LinkBtn to="/login" title="Entrar" customClass="linkBtn--main" />
        </Container>

      </header>

      <main>
        <div className="newClient__bg flex flex_ai_c">
          <div className="newClient__card flex flex_ai_c">
            <span className="newClient__step">Passo <strong>3</strong> de <strong>3</strong></span>
            <h2 className="newClient__title">Parabéns! Bem vindo à família Netflix</h2>
            <div className="newClient__congrat">
              <FaCheckCircle />
            </div>
            <div className="newClient__text">
              <span>Agora, é só relaxar e aproveitar.</span>
              <span>Entre na sua conta Netflix.</span>
            </div>
            <div className="newClient__btn">
              <LinkBtn title="Entrar" customClass="linkBtn--main" to="/login" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}