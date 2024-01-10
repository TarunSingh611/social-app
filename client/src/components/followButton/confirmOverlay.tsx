import React from "react";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  text?: string;
  col?: string;
  col2?: string;
}

const ConfirmOverlay: React.FC<OverlayProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirmation",
  text = "Are you sure?",
  col = "green",
  col2 = "slate",
}) => {
  const handleCancel = () => {
    console.log("cancel");
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg w-5/8 box-content">
          <div className="text-center">
            <h2 className="text-2xl text-slate-700 font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-8">{text}</p>
            <div className="flex justify-center">
              <button
                onClick={handleCancel}
                className={`bg-${col2}-500 font-medium text-white mr-4 px-4 py-2 rounded-md focus:outline-none`}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className={`bg-${col}-500 font-medium text-white px-4 py-2 rounded-md focus:outline-none`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmOverlay;
