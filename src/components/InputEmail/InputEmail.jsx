import React, { useState } from "react";
import LinkBtn from "../LinkBtn";


export default function InputEmail({ ctaTitle, btnTitle }) {

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    sessionStorage.setItem("registerEmail", email);
  }
  return (
    <>
      <h3 className="inputEmail__title">{ctaTitle}</h3>
      <div className="inputEmail__cta flex_ai_c">
        <div className="inputEmail__input_container">
          <input 
            type="email" 
            name="email" 
            className="inputEmail__input" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <label htmlFor="email" className="inputEmail__input_label">Email</label>
        </div>
        <LinkBtn 
          to="/new-client" 
          title={btnTitle} 
          customClass="linkBtn--main linkBtn--lg" 
          onClick={()=>handleSubmit()}
        />
      </div>
    </>
  )
}