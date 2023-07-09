import { FaPlusCircle } from 'react-icons/fa';
import AccountsCard from '../../components/AccountsCard';
import Logo from '../../components/Logo';
import { useStateContext } from '../../context/ContextProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

export default function Accounts() {

  const { user, profiles, setProfiles, setCurrentProfile } = useStateContext();
  const { documents: allProfiles } = useFetchDocuments("profiles");

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
                  <AccountsCard
                    key={key}
                    link={"/browse"}
                    name={item.name}
                    avatar={item.avatar}
                    onClick={() => handleProfile(item)}
                  />
                ))}
              <AccountsCard
                link="/home"
                name="Adicionar perfil"
                bg="5"
                customClass='prof--ad'
              >
                <FaPlusCircle />
              </AccountsCard>
            </ul>
            <div className='accounts__edit'>
              <a href="#!">Gerenciar perfis</a>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}