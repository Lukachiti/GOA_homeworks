import { useState } from "react";
function useLocalStorage(key, initialValue) {
  const savedVal = window.localStorage.getItem(key);

  const startVal = savedVal ? JSON.parse(savedVal) : initialValue;

  const [storedValue, setStoredValue] = useState(startVal);

  const setValue = (neww) => {
    setStoredValue(neww);
    window.localStorage.setItem(key, JSON.stringify(neww));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
