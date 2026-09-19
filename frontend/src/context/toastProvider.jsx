import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import Toast from '../components/common/toast/toast.jsx';
import ToastContext from './toastContext.jsx';


export function ToastProvider({ children }) {
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
