import React, {useEffect} from "react";
import Logo from '../../components/Logo';
import dados from "./inicialData";
import LinkBtn from "../../components/LinkBtn";
import Container from "../../auxiliar/Container";

import InputEmail from "../../components/InputEmail";
import FAQ from "../../components/FAQ";

const dadosHome = dados.initialText.home;
const dadosBenefits = dados.initialText.benefits;
export default function Initial() {

  useEffect(()=> {
    document.title="Netflix Brasil - assista a filmes e séries online!"
  })
  
  return (
    <>
      <header className="initial__header">

        <Container customClass={'initial__header__container flex flex_ai_c flex_jc_sb'}>
          <div className="initial__logo">
            <Logo />
          </div>
          <div className="flex flex_ai_c">
            <LinkBtn to="/login" title="Entrar" customClass="linkBtn--main" />
          </div>
        </Container>

      </header>
      <main>
        <section className="initial__section initial__home ">
          <div className="initial__home__container flex flex_ai_c">
            <h1 className="initial__title">{dadosHome.title}</h1>
            <h2 className="initial__subtitle">{dadosHome.subtitle}</h2>
            <form action="" className="initial__form">
              <InputEmail
                ctaTitle="Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura."
                btnTitle="Vamos lá"
              />
            </form>
          </div>
        </section>

        <section className="initial__benefits">
          {dadosBenefits.map((item, key) => (
            <section className={`initial__section`} key={key}>
              <Container customClass={`initial__benefits__item flex flex_ai_c ${key % 2 !== 0 && 'initial__benefits__item--reverse'}`}>
                <div className="initial__benefits__titles">
                  <h2 className="initial__benefits__title">{item.title}</h2>
                  <h3 className="initial__benefits__subtitle">{item.subtitle}</h3>
                </div>
                <div className="initial__benefits__image" style={{ backgroundImage: `${item.img}` }}></div>
              </Container>
            </section>
          ))}
        </section>
        <section className="initial__faq initial__section">
          <Container>
            <FAQ />
            <div className="initial__faq__cta">
              <InputEmail
                ctaTitle="Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura."
                btnTitle="Vamos lá"
              />
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}