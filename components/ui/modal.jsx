export const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-md shadow-lg">{children}</div>
    </div>
  );
};

export const ModalOverlay = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50" />
);

export const ModalContent = ({ children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
);
