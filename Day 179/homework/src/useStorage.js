import React from "react";
import { useState, useEffect } from "react";

export default function useStorage() {
  const addToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  const getValue = (key) => {
    localStorage.getItem(key);
  };
  const clear = () => {
    localStorage.clear();
  };
  const remove = (key) => {
    localStorage.removeItem(key);
  };
  const [storage, setStorage] = useState(localStorage);
  useEffect(() => {
    setStorage(localStorage);
  }, [localStorage]);
  return { addToLocalStorage, getValue, clear, remove, storage };
}
