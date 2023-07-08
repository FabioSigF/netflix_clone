import React from "react";
import LinkBtn from "../LinkBtn";

export default function InputEmail({ctaTitle, btnTitle}) {
  return (
    <>
      <h3 className="inputEmail__title">{ctaTitle}</h3>
      <div className="inputEmail__cta flex_ai_c">
        <div className="inputEmail__input_container">
          <input type="text" name="email" className="inputEmail__input" placeholder="email" />
          <label htmlFor="email" className="inputEmail__input_label">Email</label>
        </div>
        <LinkBtn to="/" title={btnTitle} customClass="linkBtn--main linkBtn--lg" />
      </div>
    </>
  )
}