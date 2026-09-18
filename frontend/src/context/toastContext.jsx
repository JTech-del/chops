import {
  createContext,
  useCallback,
  useContext,
    useEffect,
  useState,
} from 'react';

import Toast from '../components/common/toast/toast.jsx';

const ToastContext = createContext(null);

function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

useEffect(() => {
  if (!toast) {
    return undefined;
  }

  const timeoutId = window.setTimeout(() => {
    setToast(null);
  }, 3000);

  return () => {
    window.clearTimeout(timeoutId);
  };
}, [toast]);

  const showToast = useCallback(
    (message, type = 'success') => {
      setToast({
        id: Date.now(),
        message,
        type,
      });
    },
    [],
  );

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        showToast,
        hideToast,
      }}
    >
      {children}

      {toast && (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);

  if (context === null) {
    throw new Error(
      'useToastContext must be used inside ToastProvider.',
    );
  }

  return context;
}

export { ToastProvider };