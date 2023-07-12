import React, { useState } from 'react'

//Components
import Button from '../../components/Button/Button'
import InputForm from '../../components/InputForm/InputForm';
import ProfileEditAvatar from '../../components/ProfileEditAvatar/ProfileEditAvatar';

//Hooks
import { useNavigate } from 'react-router-dom'
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useStateContext } from '../../context/ContextProvider';


export default function NewProfile() {

  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("https://occ-0-3750-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcD0ZrsIMMPdVENlhcMLhAEQsGSplhivXwxPolt5h1wP1bquIL83x4fkrS6we4cwNWTe1nn7exw7GDMLe-72PiRcoMIBjdjmmA.png?r=b39");

  const { insertDocument, response } = useInsertDocument("profiles");
  const { user } = useStateContext();

  const navigate = useNavigate();

  const addProfile = async (e) => {
    e.preventDefault()

    try {
      await insertDocument({
        name: name,
        avatar: imageURL,
        createdBy: user.uid,
      });
    } catch (error) {
      console.log(error);
    }

    navigate("/accounts")
  }

  return (
    <div className='newProfile__wrapper'>
      <div className="newProfile__content">
        <h2 className="newProfile__content__title">
          Adicionar perfil
        </h2>
        <p className="newProfile__content__description">
          Adicione um perfil Netflix.
        </p>
        <form className="newProfile__form">
          <div className='newProfile__form__content'>
            <ProfileEditAvatar
              imageURL={imageURL}
              setImageURL={setImageURL}
            />
            <InputForm
              type="text"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="newProfile__form__buttons">
            <Button
              title="Criar Perfil"
              onClick={(e) => addProfile(e)}
            />
            <button
              className='newProfile__form__buttons__cancel'
              onClick={() => navigate("/accounts")}
            >Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
