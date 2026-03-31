import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [dValue, setDValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return dValue;
};