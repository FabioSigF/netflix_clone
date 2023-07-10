import React from "react";
import { BsPencil } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function AccountsCard({ link, profile, children, customClass, onClick, manageProfiles }) {

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate(`/edit-profile/${profile.id}`)
  }

  return (

    <div className='accountsCard__item'>
      {profile && (
        <>
          <div
            className={`accountsCard__avatar ${customClass}`}
            style={{ backgroundImage: `url(${profile.avatar})` }}
            onClick={manageProfiles ? handleEditProfile : onClick}
          >
            {children}

            {manageProfiles && (
              <button className="editProfile__button">
                < BsPencil />
              </button>
            )}
          </div>
          <span className='accountsCard__name'>{profile.name}</span>
        </>
      )}
    </div>
  )
} 