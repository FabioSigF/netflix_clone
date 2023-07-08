import React from "react";
import LinkBtn from "../../../components/LinkBtn";
import { FaCheckCircle } from "react-icons/fa";

export default function CreatePassword() {
  return (
    <div className="newClient__card flex flex_ai_c">
      <span className="newClient__step">Passo <strong>3</strong> de <strong>3</strong></span>
      <h2 className="newClient__title">Parabéns! Bem vindo à família Netflix</h2>
      <div className="newClient__congrat">
        <FaCheckCircle/>
      </div>
      <div className="newClient__text">
        <span>Agora, é só relaxar e aproveitar.</span>
        <span>Entre na sua conta Netflix.</span>
      </div>
      <div className="newClient__btn">
        <LinkBtn title="Entrar" customClass="linkBtn--main" to="/login" />
      </div>
    </div>
  )
}