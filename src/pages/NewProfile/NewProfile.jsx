import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import InputForm from '../../components/InputForm/InputForm';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useStateContext } from '../../context/ContextProvider';
import { BiEdit } from 'react-icons/bi'
import { profileAvatarData } from './profileAvatarData'
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { IoClose } from 'react-icons/io5';


export default function NewProfile() {

  const [name, setName] = useState("");
  const [openAvatar, setOpenAvatar] = useState(false);
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

  const changeAvatar = (icon) => {
    setImageURL(icon);
    setOpenAvatar(!openAvatar);
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
              title="Criar Perfil"
              onClick={(e)=>addProfile(e)}
            />
            <button
              className='newProfile__form__buttons__cancel'
              onClick={() => navigate("/accounts")}
            >Cancelar</button>
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
                        onClick={()=> changeAvatar(icon)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
            <div className="newProfile__avatar__close"
            onClick={()=>setOpenAvatar(!openAvatar)}
            >
              <IoClose />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
