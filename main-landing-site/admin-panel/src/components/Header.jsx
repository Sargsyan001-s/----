
import React, { useContext } from 'react';
import { MenuContext } from '../context/navState';
import hamburgerIcon from '../images/navbar/hamburgerIcon.svg';  
import userProfile from '../images/navbar/user_profile.svg';   
import marloLogo from '../images/navbar/MARLO.svg';   
                     
const Header = () => {
  const {toggleMenuMode } = useContext(MenuContext);
  const UserName = 'Иванов Иванов';

  return (

    <header >
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center border-b border-[#333333] justify-between bg-[#232323] px-6 py-4 text-white">
        <div className='flex '>
            <button 
              onClick={toggleMenuMode}
              className="p-2 border-none bg-none mr-2 "
              aria-label="Открыть меню"
            >
              <img src={hamburgerIcon} alt="Меню" width="24" height="24" />
            </button>
            <img src={marloLogo} alt="" />
        </div>
      
        <button
          onClick={() => alert('Профиль')}
          className="p-3 bg-[#333333] flex rounded-xl"
          aria-label="Профиль"
        >
          <img className='mr-2' src={userProfile} alt="Профиль" width="24" height="24" />
          {UserName}
        </button>
      </div>   
    </header>
  );
};

export default Header;