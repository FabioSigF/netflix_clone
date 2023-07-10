import { FaPlusCircle } from 'react-icons/fa';
import AccountsCard from '../../components/AccountsCard';
import Logo from '../../components/Logo';
import { useStateContext } from '../../context/ContextProvider';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

import { GrEdit } from 'react-icons/gr'

export default function Accounts() {

  const { user, profiles, setProfiles, setCurrentProfile } = useStateContext();
  const { documents: allProfiles } = useFetchDocuments("profiles");

  const [manageProfiles, setManageProfiles] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setProfiles([]);

    console.log(user)
    user && allProfiles && allProfiles.forEach((item) => {
      if (item.createdBy === user.uid) {
        setProfiles(current => [...current, item])
      }
    });
  }, [allProfiles, user])



  function handleProfile(user) {
    setCurrentProfile(user);
    console.log(user)
    localStorage.setItem("currentProfile", JSON.stringify(user));
    localStorage.setItem("profiles", JSON.stringify(profiles))
    navigate("/browse");
  }

  return (
    <>
      <section className='accounts'>
        <header className='accounts__header'>
          <Logo />
        </header>
        <main className='accounts__container'>
          <div className='accounts__content'>
            <h2 className='accounts__title'>Quem está assistindo?</h2>
            <ul className='accounts__list'>
              {profiles &&
                profiles.map((item, key) => (
                  <li className='accounts__item'>
                    <AccountsCard
                      key={key}
                      profile={item}
                      onClick={() => handleProfile(item)}
                      manageProfiles={manageProfiles}
                    />
                  </li>
                ))}
              <AccountsCard
                onClick={()=>navigate("/new-profile")}
                profile={{name: "Adicionar Perfil"}}
                bg="5"
                customClass='prof--ad'
              >
                <FaPlusCircle />
              </AccountsCard>
            </ul>
            <div className='accounts__edit'>
              {!manageProfiles &&
                <button onClick={() => setManageProfiles(!manageProfiles)}>Gerenciar perfis</button>
              }
              {manageProfiles &&
                <button onClick={() => setManageProfiles(!manageProfiles)}>Concluído</button>
              }
            </div>
          </div>
        </main>
      </section>
    </>
  )
}