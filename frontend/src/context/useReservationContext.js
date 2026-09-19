import { useContext } from 'react';

import ReservationContext from './reservationContext.jsx';

export function useReservationContext() {
  const context = useContext(ReservationContext);

  if (context === null) {
    throw new Error(
      'useReservationContext must be used inside ReservationProvider.',
    );
  }

  return context;
}