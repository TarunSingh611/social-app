import React, { useState } from "react";
import Basic from "./Basic";
import Privacy from "./Privacy";
import Security from "./Security";
import General from "./General";
import apiUpdateUser  from "@/api/user/apiUpdateUser";
import { toast } from "react-toastify";
interface Setting {
  key: string;
  label: string;
  component: React.ComponentType<any>;
}

const settingsData: Setting[] = [
  { key: "general-info", label: "General Info", component: General },
  { key: "privacy-info", label: "Privacy Info", component: Privacy },
  { key: "security-info", label: "Security Info", component: Security },
];

interface ShowSettings {
  [key: string]: boolean;
}

const Settings: React.FC<{ user: any }> = ({ user }) => {
  const [showSettings, setShowSettings] = useState<ShowSettings>(
    settingsData.reduce((acc, setting) => {
      acc[setting.key] = false;
      return acc;
    }, {} as ShowSettings)
  );

  const toggleSetting = (key: string) => {
    setShowSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key],
    }));
  };

  const handleSubmit = (values:any) => {

   apiUpdateUser(values)
   .then((res:any) => {
     if(res.statusCode === 200){
       toast.success(res.message)
     }
     else if(res.statusCode === 400){
       toast.error(res.message)
       
     }
     else if(res.statusCode === 500){
       toast.error(res.message)
       
     }
     else if (res.statusCode === 404){
       toast.error(res.message)
     }
     else{
       toast.error("unkopnwn error")
     }
   })
   .catch(() => {
     toast.error("unkopnwn error")
   })
  }

  return (
    <div>
      <Basic user={user} onUpdateProfile={handleSubmit}/>

      <div className="my-4">
        {settingsData.map(({ key, label, component: Component }) => (
          <div key={key} className="mb-4">
            <div key={key} className="flex justify-between w-full">
              <label className="mr-2" htmlFor={key}>
                {label}:
              </label>
              <div
                className="switch-checkbox"
                onClick={() => toggleSetting(key)}
              >
                <input
                  id={key}
                  type="checkbox"
                  checked={showSettings[key]}
                  onChange={() => toggleSetting(key)}
                />
                <span className="slider"></span>
              </div>
            </div>
            {showSettings[key] && <Component user={user} onUpdateProfile={handleSubmit} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
