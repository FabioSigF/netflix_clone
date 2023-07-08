import React from "react";
import newClientImg from '../../../imgs/pages/newClient/Devices.png';
import LinkBtn from "../../../components/LinkBtn";

export default function CreatePassword() {
  return (
    <div className="newClient__card flex flex_ai_c">
      <img src={newClientImg} alt="" className="newClient__img" />
      <span className="newClient__step">Passo <strong>1</strong> de <strong>3</strong></span>
      <h2 className="newClient__title">Conclua a configuração da sua conta</h2>
      <div className="newClient__text">
        <span>Netflix é personalizado para você.</span>
        <span>Crie uma senha para assistir em qualquer dispositivo a qualquer hora.</span>
      </div>
      <div className="newClient__btn">
        <LinkBtn title="Próximo" customClass="linkBtn--main" to="/new-client/password" />
      </div>
    </div>
  )
}