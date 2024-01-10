import React from "react";
import { removeToken } from "@/services/auth";
import { setValidUser } from "@/redux/slicers/authSlice";
import { useDispatch } from "react-redux";
import { setCurtainRaised } from "@/redux/ReduxSlicer";
import { useRouter } from "next/navigation";
interface SearchOverlayProps {
  onClose: () => void;
}

const LogoutOverlay: React.FC<SearchOverlayProps> = ({onClose}) => {
    const dispatch = useDispatch();
    const router = useRouter();

const handleCancel = () => {
    onClose();
}
const handleConfirmLogout = () => {
    localStorage.clear();
    dispatch(setValidUser(false));
    removeToken();
    dispatch(setCurtainRaised(false));
    router.push("/");
}
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-5/8 box-content">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Logout</h2>
              <p className="text-gray-600 mb-8">
                Are you sure you want to logout? Logging out will end your current session.
              </p>
              <div className="flex justify-center">
                <button onClick={handleCancel} className="bg-gray-300 font-medium `text-gray-700 mr-4 px-4 py-2 rounded-md focus:outline-none">
                  Cancel
                </button>
                <button onClick={handleConfirmLogout} className="bg-red-500 font-medium text-white px-4 py-2 rounded-md focus:outline-none">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default LogoutOverlay;
