import { useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const Callback = useRef();

  useEffect(() => {
    Callback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => Callback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
