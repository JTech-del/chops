import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ReservationContext = createContext(null);

const RESERVATION_STORAGE_KEY = 'chops-reservation';

const initialReservation = {
  date: '',
  time: '',
  guests: 2,
  name: '',
  phone: '',
  specialRequest: '',
};

function getInitialReservation() {
  if (typeof window === 'undefined') {
    return initialReservation;
  }

  try {
    const storedReservation =
      window.localStorage.getItem(
        RESERVATION_STORAGE_KEY,
      );

    if (!storedReservation) {
      return initialReservation;
    }

    const parsedReservation =
      JSON.parse(storedReservation);

    return {
      ...initialReservation,
      ...parsedReservation,
    };
  } catch {
    return initialReservation;
  }
}

function ReservationProvider({ children }) {
  const [reservation, setReservation] = useState(
    getInitialReservation,
  );

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  useEffect(() => {
    window.localStorage.setItem(
      RESERVATION_STORAGE_KEY,
      JSON.stringify(reservation),
    );
  }, [reservation]);

  const updateReservation = (
    field,
    value,
  ) => {
    setReservation((currentReservation) => ({
      ...currentReservation,
      [field]: value,
    }));

    setIsSubmitted(false);
  };

  const resetReservation = () => {
    setReservation(initialReservation);
    setIsSubmitting(false);
    setIsSubmitted(false);

    window.localStorage.removeItem(
      RESERVATION_STORAGE_KEY,
    );
  };

  const submitReservation = async () => {
    setIsSubmitting(true);

    /*
     * Simulate a reservation request.
     * This will later be replaced by an API call.
     */
    await new Promise((resolve) => {
      window.setTimeout(resolve, 1200);
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <ReservationContext.Provider
      value={{
        reservation,
        updateReservation,
        resetReservation,
        submitReservation,
        isSubmitting,
        isSubmitted,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservationContext() {
  const context = useContext(
    ReservationContext,
  );

  if (context === null) {
    throw new Error(
      'useReservationContext must be used inside ReservationProvider.',
    );
  }

  return context;
}

export { ReservationProvider };