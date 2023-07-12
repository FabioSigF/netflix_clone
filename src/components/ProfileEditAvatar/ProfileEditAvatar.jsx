import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { IoClose } from 'react-icons/io5';
import { BiEdit } from 'react-icons/bi';
import { profileAvatarData } from './profileAvatarData';

export default function ProfileEditAvatar({ imageURL, setImageURL }) {

  const [openAvatar, setOpenAvatar] = useState(false);

  const changeAvatar = (icon) => {
    setImageURL(icon);
    setOpenAvatar(!openAvatar);
  }

  return (
    <>
      <div className="profileEditAvatar">
        <div className="profileEditAvatar--container">
          <img src={imageURL} alt="Temporary avatar"
            className='profileEditAvatar__img'
          />
          <div className="profileEditAvatar--button"
            onClick={() => setOpenAvatar(!openAvatar)}
          >
            <BiEdit />
          </div>
        </div>
      </div>
      {openAvatar && (
        <>
          <div className="profileEditAvatar__iconList">
            {profileAvatarData.map((serie, key) => (
              <div key={key} className='profileEditAvatar__iconList__wrapper'>
                <h3 className="profileEditAvatar__iconList__title">{serie.title}</h3>
                <Swiper
                  slidesPerView={'auto'}
                  spaceBetween={15}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation]}
                  className="mySwiper profileEditAvatar__iconList__list"
                >
                  {serie.icons.map((icon, key) => (
                    <SwiperSlide key={key}
                    >
                      <img
                        src={icon}
                        alt={serie.title}
                        className="profileEditAvatar__iconList__icon"
                        onClick={() => changeAvatar(icon)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
            <div className="profileEditAvatar__iconList__close"
              onClick={() => setOpenAvatar(!openAvatar)}
            >
              <IoClose />
            </div>
          </div>
        </>
      )}
    </>
  )
}
