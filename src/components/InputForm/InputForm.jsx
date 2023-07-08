import React, { useState } from "react";

export default function InputForm({ type, name, placeholder, value, onChange, pattern }) {

  const [errorMessage, setErrorMessage] = useState('')

  const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
  ]

  const errorMessages = {
    name: {
      valueMissing: 'O campo de nome não está preenchido.'
    },
    email: {
      valueMissing: 'O campo de email não está preenchido.',
      typeMismatch: 'O formato de email digitado não é válido.'
    },
    password: {
      valueMissing: 'A senha deve ser informada.',
      patternMismatch: 'A senha deve conter entre 6 e 12 caracteres, sendo pelo menos uma letra minúscula, uma maiúscula, um número e não deve conter símbolos.'
    },
  }

  function showErrorMessage(tipoDeInput, input) {
    let message = '';
    errorTypes.forEach((erro) => {
      if (input.validity[erro]) {
        message = errorMessages[tipoDeInput][erro]
      }
    })
    return message;
  }

  function inputValidate(e) {
    const input = e.target
    const inputType = input.dataset.type;
    if (input.validity.valid) {
      input.parentElement.classList.remove('error')
      setErrorMessage('')
    } else {
      input.parentElement.classList.add('error')
      setErrorMessage(showErrorMessage(inputType, input))
    }
  }

  return (
    <div className="inputForm">
      <div className="inputForm__container">
        <input type={type} className="inputForm__item" name={name} placeholder={placeholder}
          value={value}
          pattern={pattern}
          data-type={name}
          onChange={onChange}
          onBlur={(e) => inputValidate(e)}
          required
        />
        <label htmlFor={name} className="inputForm__label">{placeholder}</label>
      </div>
      <span className="inputForm__error">{errorMessage}</span>
    </div>
  )
}