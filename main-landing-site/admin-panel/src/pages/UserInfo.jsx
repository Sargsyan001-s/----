import React from 'react';

const UserInfo = () => {
  return (
    <div className="max-w-2xl mx-auto mt-28">
      <h1 className="text-white text-2xl font-medium mb-6">Личная информация</h1>
      
      <div className="mt-2">
        <div className="text-white text-lg font-medium mb-4">Управление данными о себе</div>
        
        <p className="text-[#999999] text-sm font-normal leading-5 mb-6">Все поля обязательны</p>

        <form>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">Имя</label>
            <input type="text" value="Иван" readOnly className="w-full px-4 py-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-marlo-red" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">Фамилия</label>
            <input type="text" value="Иванов" readOnly className="w-full px-4 py-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-marlo-red" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
            <input type="email" value="example@gmail.com" readOnly className="w-full px-4 py-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-marlo-red" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">Выбор языка <span className="text-red-600">*</span></label>
            <select className="w-full px-4 py-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-marlo-red">
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-1">Действие с пользователем <span className="text-red-600">*</span></label>
            <select className="w-full px-4 py-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-marlo-red">
              <option value="deactivate">Деактивировать аккаунт</option>
              <option value="delete">Удалить аккаунт</option>
              <option value="export">Экспорт данных</option>
            </select>
          </div>
           
          <div className="flex gap-4">
            <button type="submit" className="btn-primary flex-1">
              Сохранить
            </button>
            <button type="button" className="btn-secondary flex-1">
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;