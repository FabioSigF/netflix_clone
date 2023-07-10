import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import InputForm from '../../components/InputForm/InputForm';
import { useStateContext } from '../../context/ContextProvider';
import { BiEdit } from 'react-icons/bi'
import { profileAvatarData } from '../NewProfile/profileAvatarData'
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { IoClose } from 'react-icons/io5';


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
  const [openAvatar, setOpenAvatar] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [formError, setFormError] = useState("");
  const { user } = useStateContext();

  const navigate = useNavigate();

  const changeAvatar = (icon) => {
    setImageURL(icon);
    setOpenAvatar(!openAvatar);
  }

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
            <div className="newProfile__form__avatar--container">
              <img src={imageURL} alt="Temporary avatar"
                className='newProfile__form__avatar'
              />
              <div className="newProfile__form__avatar--button"
                onClick={() => setOpenAvatar(!openAvatar)}
              >
                <BiEdit />
              </div>
            </div>
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
      {openAvatar && (
        <>
          <div className="newProfile__avatar">
            {profileAvatarData.map((serie, key) => (
              <div key={key}>
                <h3 className="newProfile__avatar__title">{serie.title}</h3>
                <Swiper
                  slidesPerView={5}
                  spaceBetween={15}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation]}
                  className="mySwiper newProfile__avatar__list"
                >
                  {serie.icons.map((icon, key) => (
                    <SwiperSlide key={key}
                    >
                      <img
                        src={icon}
                        alt={serie.title}
                        className="newProfile__avatar__icon"
                        onClick={() => changeAvatar(icon)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
            <div className="newProfile__avatar__close"
              onClick={() => setOpenAvatar(!openAvatar)}
            >
              <IoClose />
            </div>
          </div>
        </>
      )}
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
