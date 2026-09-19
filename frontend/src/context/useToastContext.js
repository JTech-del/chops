import ToastContext from './toastContext.jsx';

import { useContext } from 'react';


export function useToastContext() {
  const context = useContext(ToastContext);

  if (context === null) {
    throw new Error(
      'useToastContext must be used inside ToastProvider.',
    );
  }

  return context;
}
