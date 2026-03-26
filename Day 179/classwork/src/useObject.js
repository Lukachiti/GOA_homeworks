import { useState } from "react";

export default function useObject(Value) {
  const [obj, setObj] = useState(Value);

  const getKeyValue = (key) => {
    return obj[key];
  };

  const setKeyValue = (key, val) => {
    setObj((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  const addKeyValuePair = (key, val) => {
    setObj((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  const remove = (key) => {
    setObj((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  const reset = () => setObj(Value);

  return {
    obj,
    getKeyValue,
    setKeyValue,
    addKeyValuePair,
    remove,
    reset,
  };
}
