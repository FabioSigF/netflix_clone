import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../../components/InputForm";
import Button from "../../../components/Button";
import { useAuthentication } from "../../../hooks/useAuthentication";

export default function CreatePassword() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName: null,
      email,
      password
    }
    const res = await createUser(user);

    navigate("/congrat");
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  useEffect(() => {
    setEmail(sessionStorage.getItem("registerEmail"));
  }, [])

  return (
    <div className="newClient__card flex flex_ai_c">
      <span className="newClient__step">Passo <strong>2</strong> de <strong>3</strong></span>
      <h2 className="newClient__title">Crie uma senha para começar sua conta</h2>
      <div className="newClient__text">
        <span>Apenas mais alguns passos e finalizamos!</span>
        <span>Nós também odiamos papelada.</span>
      </div>
      <form className="newClient__form" onSubmit={(e) => handleSubmit(e)}>
        {error && (
          <div className="login__errors">
            <span className="login__error">{error}</span>
          </div>
        )}
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
        <div className="newClient__btn">
          <Button title="Próximo" type="submit" />
        </div>
      </form>
    </div>
  )
}