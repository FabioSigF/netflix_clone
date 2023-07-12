import React, { useEffect, useState } from 'react'

//Components
import Button from '../../components/Button/Button'
import InputForm from '../../components/InputForm/InputForm';
import ProfileEditAvatar from '../../components/ProfileEditAvatar';

//Hooks
import { useStateContext } from '../../context/ContextProvider';
import { useNavigate, useParams } from 'react-router-dom'
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';


export default function EditProfile() {

  const { id } = useParams()

  const { document: profile } = useFetchDocument("profiles", id);

  const { updateDocument, response } = useUpdateDocument("profiles")
  const { deleteDocument } = useDeleteDocument("profiles")


  const [deleteProfile, setDeleteProfile] = useState(false);
  const [name, setName] = useState("");

  const [imageURL, setImageURL] = useState("");
  const [formError, setFormError] = useState("");
  const { user } = useStateContext();

  const navigate = useNavigate();

  useEffect(() => {

    if (profile) {
      setName(profile.name);
      setImageURL(profile.avatar);
    }
  }, [profile])


  const editProfile = (e) => {
    e.preventDefault();
    setFormError("");

    //checar todos os valores
    if (!name || !imageURL) {
      setFormError('Por favor, preencha todos os campos.')
      console.log(formError);
    }
    if (formError) return;

    const data = {
      name: name,
      avatar: imageURL,
      createdBy: user.uid,
    }

    updateDocument(id, data)

    //redirect home page
    navigate("/accounts")
  }

  const handleDeleteProfile = () => {
    deleteDocument(id);
    setDeleteProfile(false)
    navigate("/accounts");
  }



  return (
    <div className='newProfile__wrapper'>
      <div className="newProfile__content">
        <h2 className="newProfile__content__title">
          Editar perfil
        </h2>
        <p className="newProfile__content__description">
          Edite o seu perfil Netflix.
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
              title="Editar Perfil"
              onClick={(e) => editProfile(e)}
            />
            <button
              className='newProfile__form__buttons__cancel'
              onClick={() => navigate("/accounts")}
            >Cancelar</button>
            <button
              type='button'
              className='newProfile__form__buttons__cancel'
              onClick={() => {
                setDeleteProfile(!deleteProfile)
              }}
            >Excluir Perfil</button>
          </div>
        </form>
      </div>
      
      {deleteProfile && (
        <div className="deleteWarning">
          <div className="newProfile__form deleteWarning__content">
            <div className='newProfile__form__content'>
              <div className="newProfile__form__avatar--container">
                <img src={imageURL} alt="Temporary avatar"
                  className='newProfile__form__avatar'
                />
              </div>
              <p>Todo o histórico deste perfil, inclusive a Minha lista, avaliações e atividades recentes, serão apagadas para sempre e você não terá mais acesso a elas.</p>
            </div>
          </div>
          <div className="deleteWarning__buttons">
            <button
              type='button'
              onClick={() => setDeleteProfile(false)}
              className='newProfile__form__buttons__cancel'
            >Voltar</button>
            <Button onClick={() => handleDeleteProfile()}
              title="Excluir"
            />
          </div>
        </div>
      )}
    </div>
  )
}
