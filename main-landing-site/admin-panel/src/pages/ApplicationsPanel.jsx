import React, { useState } from "react";

const ApplicationsPanel = () => {

    const applications = [
        {
            id: 1,
            name: 'Account Console',
            type: 'Внутренний',
            status: 'Используется',
            client: 'account-console',
            url: 'http: //localhost:8080/realms/Marlo/account/'
        }
    ];

    const [openAppId, setOpenAppId] = useState(null);

    const toggleDetails = (appId) => {
        if (openAppId === appId) {
            setOpenAppId(null);
        }
        else {
            setOpenAppId(appId);
        }
    }

    return(
        <div className="text-[#E6E6E6] min-h-screen p-6 w-full">
            <div className="flex flex-col gap-7 py-3 border-b-[0.1rem] border-b-[#333333]">
                <h1 className="text-xl">Приложения</h1>
                <p className="mb-7">Manage your application permissions</p>
            </div>
            <table className="w-full">
                <thead className="font-semibold border-b-[0.1rem] border-b-[#333333]">
                    <tr>
                        <td className="py-4 px-3">Имя</td>
                        <td className="py-4 px-3">Тип приложения</td>
                        <td className="py-4 px-3">Статус</td>
                        <td className="py-4 px-3"></td>
                    </tr>
                </thead>
                <tbody >
                    {applications.map((app) => (
                        <React.Fragment key={app.id}>
                            <tr 
                                className={`border-b-[0.1rem] border-b-[#333333] font-medium ${openAppId === app.id ? 'border-l-[0.2rem]  border-l-[#A80A2A]' : 'border-transparent'} `}
                                onClick={() => toggleDetails(app.id)}>
                                <td className="flex items-center gap-3 py-8 px-3">
                                    <svg 
                                        className={`text-[#E6E6E6] transition-transform duration-300 rotate-90`} 
                                        width="6" height="11" viewBox="0 0 6 11">
                                        <path d="M1 9.36157L5 5.36157L1 1.36157" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <span className={`${openAppId === app.id ? 'text-[#DB3D5D]' : 'text-current'}`}>{app.name}</span>
                                    <svg className={`${openAppId === app.id ? 'text-[#DB3D5D]' : 'text-current'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.40018 6.31991L15.8902 3.48991C19.7002 2.21991 21.7702 4.29991 20.5102 8.10991L17.6802 16.5999C15.7802 22.3099 12.6602 22.3099 10.7602 16.5999L9.92018 14.0799L7.40018 13.2399C1.69018 11.3399 1.69018 8.22991 7.40018 6.31991Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10.1099 13.6501L13.6899 10.0601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </td>
                                <td className="py-8 px-3">
                                    {app.type}
                                </td>
                                <td className="py-8 px-3">
                                    {app.status}
                                </td>
                                <td className="py-8 px-3"></td>
                            </tr>
                            {openAppId === app.id && (
                                <tr className={`border-b-[0.1rem] border-b-[#333333] font-medium ${openAppId === app.id ? 'border-l-[0.2rem]  border-l-[#A80A2A]' : 'border-transparent'} `}>
                                    <td colSpan={4} className="py-8 px-3 space-y-2">
                                        <div><span className="font-semibold">Клиент</span> <br /> <span className="font-medium">{app.client}</span></div>
                                        <div><span className="font-semibold">URL</span> <br /> <span className="font-medium">{app.url}</span></div>
                                    </td>
                                </tr>
                            )}
                            
                        </React.Fragment>
                    ))}
                </tbody>
                
            </table>
        </div>
        
    );
}

export default ApplicationsPanel;




