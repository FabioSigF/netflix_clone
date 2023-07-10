import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../auxiliar/Container";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useStateContext } from "../../context/ContextProvider";

import bg from '../../imgs/pages/initial/bg.jpg'
export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setProfiles } = useStateContext();

  const { login, error: authError, loading } = useAuthentication();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      email,
      password
    }

    try {
      setProfiles([]);
      
      const res = await login(user);
      navigate("/accounts");
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])

  console.log(error);

  return (
    <>
      <header className="login__header">

        <Container customClass={'login__header__container'}>
          <div className="login__logo">
            <Logo />
          </div>
        </Container>

      </header>

      <main>
        <div className="login__bg" style={{backgroundImage: `url(${bg})`}}>
          <div className="login__form">
            <Form title="Entrar" onClick={(e) => handleSubmit(e)}>
              {error && (
                <div className="login__errors">
                  <span className="login__error">{error}</span>
                </div>
              )}
              <div className="login__inputs">
                <InputForm
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputForm
                  type="password"
                  name="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Form>
          </div>
        </div>
      </main>
    </>
  )
}