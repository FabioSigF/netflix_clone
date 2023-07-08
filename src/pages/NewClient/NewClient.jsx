import React from "react";
import {Outlet } from "react-router-dom";
import Container from "../../auxiliar/Container";
import Logo from "../../components/Logo";
import LinkBtn from "../../components/LinkBtn";


export default function NewClient() {

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
            <Outlet />
          </div>

      </main>
    </>
  )
}