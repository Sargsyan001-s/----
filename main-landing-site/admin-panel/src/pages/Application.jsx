import React from 'react';

const Application = () => {
  const appData = {
    name: "Account Console",
    type: "Внутренний",
    status: "Используется",
    client: "account-console",
    url: "http://localhost:8080/realms/Mario/account/"
  };

  return (
    <div className="max-w-6xl mx-auto mt-28 ">
      <h1 className="text-white text-2xl font-medium mb-9">Приложения</h1>
      <p 
  className="text-gray-300 font-montserrat font-medium text-small-headline leading-130 mb-6 border-marlo-light-gray pb-14" style={{ color: '#E6E6E6' }}
>
  Manage your application permissions
</p>

      <div className="bg-[#232323]   border-marlo-light-gray">
        {/* Заголовки с фоном #1A1A1A */}
        <div className="grid grid-cols-3 text-marlo-gray text-xs font-medium py-3 px-4 border-b  border-t border-marlo-light-gray" style={{ backgroundColor: '#1A1A1A' }}>
          <div style={{ color: '#E6E6E6' }}>Имя</div>
  <div style={{ color: '#E6E6E6' }}>Тип приложения</div>
  <div style={{ color: '#E6E6E6' }}>Статус</div>
        </div>

        <div className="grid grid-cols-3 items-center text-sm px-4 py-3 border-t border-marlo-light-gray">
          <div className="flex items-center gap-2 font-medium" style={{ color: '#DB3D5D' }}>
            <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L8 10L12 6" stroke="#E6E6E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </span>
            <span>{appData.name}</span>
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.40018 6.32003L15.8902 3.49003C19.7002 2.22003 21.7702 4.30003 20.5102 8.11003L17.6802 16.6C15.7802 22.31 12.6602 22.31 10.7602 16.6L9.92018 14.08L7.40018 13.24C1.69018 11.34 1.69018 8.23003 7.40018 6.32003Z" stroke="#DB3D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1099 13.6501L13.6899 10.0601" stroke="#DB3D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </span>
          </div>
          <div className=" text-white">{appData.type}</div>
          {/* <div className="w-{#E6E6E6}">{appData.status}</div> */}
          <div style={{ color: '#E6E6E6' }}>{appData.status}</div>
        </div>

        <div className="px-4 py-4 text-marlo-gray text-sm">
          <div className="mb-3">
            <div className="font-semibold text-[#E6E6E6] mb-1 border-t border-marlo-light-gray mx-[-1rem] px-4 pt-4">Клиент</div>
            <div>{appData.client}</div>
          </div>
          <div>
            <div className="font-semibold  text-[#E6E6E6] mb-1">URL</div>
            <div className="break-all">{appData.url}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Application;
