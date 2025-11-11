import React, { useState } from 'react';

const UserPanel = () => {
  const [openUserId, setOpenUserId] = useState(null);

  const [access, setAccess] = useState({});

  const [roles, setRoles] = useState({
    1: 'Работник',
    2: 'Практикант',
  });

  const applications = [
    { id: 1, name: 'Jira' },
    { id: 2, name: 'Wiki' },
    { id: 3, name: 'Email' },
    { id: 4, name: 'Cloud' },
  ];

  const users = [
    {
      id: 1,
      number: 1,
      name: 'Антонов Антон',
      role: 'Работник',
    },
    {
      id: 2,
      number: 2,
      name: 'Иванов Иван',
      role: 'Практикант',
    },
  ];

  const getActiveApps = (userId) => {
  return applications
    .filter((app) => getAccessValue(userId, app.name) === 'active')
    .map((app) => app.name)
    .join(', ');
  };

  const toggleDetails = (userId) => {
    setOpenUserId(openUserId === userId ? null : userId);
  };

  const handleAccessChange = (userId, appName, value) => {
    setAccess((prev) => ({
      ...prev,
      [`${userId}-${appName}`]: value,
    }));
  };

  const getAccessValue = (userId, appName) => {
    return access[`${userId}-${appName}`] || 'active';
  };

  const handleRoleChange = (userId, value) => {
    setRoles((prev) => ({
      ...prev,
      [userId]: value,
    }));
  };

  const getRoleValue = (userId) => {
    return roles[userId] || 'Практикант';
  };

  return (
    <div className="text-white min-h-screen p-6 w-full">
      <div className="flex flex-row justify-between py-3 border-b-[0.1rem] border-b-[#333333]">
        <h1 className="text-xl">Список пользователей</h1>
        <button className="text-white flex flex-row text-sm items-center bg-[#D20C34] py-2 px-4 rounded-lg gap-2">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 15.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Добавить пользователя
        </button>
      </div>
      <table className="w-full">
        <thead className="text-[#999999] border-b-[0.1rem] border-b-[#333333]">
          <tr className="text-left">
            <th className="py-3 px-3">№</th>
            <th className="py-3 px-3">Имя</th>
            <th className="py-3 px-3">Доступ в приложения:</th>
            <th className="py-3 px-3">Роль</th>
            <th className="py-3 px-3"></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            const isExpanded = openUserId === user.id; 
            

            return (
              <React.Fragment key={user.id}>
                <tr
                  className={`border-b-[0.1rem] border-b-[#333333]  ${
                    isExpanded ? 'bg-[#232323]' : 'bg-transparent'
                  }`}
                >
                  <td className="py-8 px-3 text-[#999999]">{user.number}</td>
                  <td
                    className={`py-4 px-3 transition-colors ${
                      isExpanded ? 'text-[#D20C34] font-medium' : 'text-white'
                    }`}
                  >
                    {user.name}
                  </td>
                  <td className="py-4 px-3">{getActiveApps(user.id)}</td>
                  <td className="py-4 px-3">
                    {isExpanded ? (
                      <div className="relative inline-block w-40">
                        <select
                          value={getRoleValue(user.id)}
                          onChange={(e) => handleRoleChange(user.id, e.target.value)}
                          className="appearance-none bg-transparent border border-[#999999] text-[#999999] text-sm rounded-lg w-full py-2 pl-3 pr-10 cursor-pointer focus:outline-none"
                        >
                          <option value="Практикант">Практикант</option>
                          <option value="Работник">Работник</option>
                          <option value="Админ">Админ</option>
                        </select>
                        <svg
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#999999]"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.46997 10.64L12 14.16L15.53 10.64"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <span>{user.role}</span>
                    )}
                  </td>

                  <td className="py-4 px-3">
                    <button
                      onClick={() => toggleDetails(user.id)}
                      className="text-gray-500 hover:text-gray-300"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4906 12.5H18.4996" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.4926 12.5H12.5015" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.49451 12.5H6.50349" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                {isExpanded &&
                applications.map((app) => {
                    const userAppKey = `${user.id}-${app.name}`;
                    const isAppActive = access[userAppKey] === 'active';

                    return (
                    <tr key={`detail-${app.id}`} className="bg-[#232323] border-b-[0.1rem] border-b-[#333333] " >
                        <td className={`py-5 px-3 pl-8 text-sm ${isAppActive ? 'text-white' : 'text-[#999999]'}`}>
                        {app.name}
                        </td>
                        <td colSpan="3" className="py-5 px-3">
                        <div className="relative inline-block w-40">
                            <select
                            value={getAccessValue(user.id, app.name)}
                            onChange={(e) =>
                                handleAccessChange(user.id, app.name, e.target.value)
                            }
                            className="appearance-none bg-transparent border border-[#999999] text-[#999999] text-sm rounded-lg w-full py-2 pl-3 pr-10 cursor-pointer focus:outline-none"
                            >
                            <option value="active">Активно</option>
                            <option value="no-access">Нет доступа</option>
                            </select>
                            <svg
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#999999]"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.46997 10.64L12 14.16L15.53 10.64"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                        </div>
                        </td>
                        <td></td>
                    </tr>
                    );
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserPanel;



