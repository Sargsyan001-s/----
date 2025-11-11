import React from 'react';

const LoginSettings = () => {
  return (
    <div className="p-6 text-[#E6E6E6] min-h-screen w-full">
        <h1 className="font-medium mb-6 text-xl">Вход</h1>
        <p className="font-medium mb-6 text-base">Настройте варианты входа</p>

        <h2 className="font-medium mb-6 text-lg">Базовая аутентификация</h2>
        <p className="font-normal mb-6 text-sm">Пароль</p>
        <p className="font-normal mb-6 text-sm">Вход с использованием пароля</p>

        <div className="border-t border-[#333333] my-3"></div>

        <div className="flex justify-between items-center py-0">
            <span className="font-normal text-sm">Пароль</span>
            <p className="font-normal text-sm"><span className='text-base font-medium'>Создан</span> 18 июня 2023 г. в 11:30</p>
            <button className="font-semibold bg-[#D20C34] hover:bg-[#a20a28] text-white px-4 py-2 rounded-lg">
            Обновить
            </button>
        </div>

        <div className="border-t border-[#333333] my-3"></div>

        <h2 className="text-xl font-medium mb-9 ">Двухфакторная аутентификация</h2>
        
        <div className="flex justify-between items-center">
            <div className='flex flex-col'>
                <p className="font-normal mb-6 text-sm">Приложение аутентификатора</p> 
                <p className="text-sm mb-0">Ввод проверочного кода из приложения аутентификатора</p>
            </div>
            <a href="#" className="text-[#DB3D5D] hover:text-[#962139]">
                Настроить приложение аутентификатор
            </a>
        </div>

        <div className="border-t border-[#333333] my-6"></div>

        <p className="text-center font-normal py-0">
            Приложение аутентификатор не настроено
        </p>

        <div className="border-t border-[#333333] my-4 text-sm"></div>
    </div>
  );
};

export default LoginSettings;

