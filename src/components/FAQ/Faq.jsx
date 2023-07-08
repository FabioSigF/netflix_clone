import React from "react";
import { useState } from "react/cjs/react.development";
import faqData from "./FAQData";

export default function FAQ() {
  
  const [faqOpen, setFaqOpen] = useState(false)

  function toggleFaq(e, key){
    const item = document.querySelectorAll('.faq__item')
    if(faqOpen === false){
      item[key].classList.add('open')
      setFaqOpen(true)
    } else {
      item[key].classList.remove('open')
      setFaqOpen(false)
    }
  }


  const data = faqData.textData;
  return (
    <section className="faq">
      <h2 className="faq__title">Perguntas frequentes</h2>
      <ul className="faq__list">
        {
          data.map((item, key) => (
            <li className="faq__item" key={key} onClick={(e)=>toggleFaq(e, key)}>
              <button className="faq__question flex flex_ai_c flex_jc_sb">
                {item.title}
                <span className="faq__btn"></span>
              </button>
              <div className="faq__answer">
                <div>
                {item.answer.map((item, key) => (
                  <p className="faq__answer__text" key={key}>
                    {item.p}
                  </p>
                ))}
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}