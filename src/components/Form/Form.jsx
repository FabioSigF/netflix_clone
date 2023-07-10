import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form({ title, children, onClick }) {

  const [recapchaInfo, setRecapchaInfo] = useState(false);

  return (
    <div className="form">
      <h2 className="form__title">{title}</h2>
      <form action="" className="form__container">
        {children}
        <div className="form__btn">
          <button className="linkBtn linkBtn--main" onClick={onClick}>{title}</button>
        </div>
      </form>
      {title === 'Entrar' &&
        <>
          <div className="form__help flex flex_ai_c flex_jc_sb">
            <div className="form__rememberMe flex flex_ai_c">
              <input type="checkbox" name="remeber_me" defaultChecked />
              <label htmlFor="">Lembre-se de mim</label>
            </div>
            <div className="form__helpMe">
              <a href="#!">Precisa de ajuda?</a>
            </div>
          </div>
          <div className="form__other">
            <div className="form__subscribe">
              <span>Novo por aqui? <Link to="/new-client">Assine agora!</Link></span>
            </div>
            <div className="form__reCaptcha">
              <span>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.<strong onClick={() => setRecapchaInfo(!recapchaInfo)}>
                {!recapchaInfo && ("Saiba mais.")}
              </strong></span>

              <span style={recapchaInfo ? {visibility: "visible"} : {visibility: "hidden", color: "transparent"}}>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à Política de Privacidade e Termos de Uso, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</span>
            </div>
          </div>
        </>
      }
    </div>
  )
}