import { useRef } from 'react';

function useFocus() {
  const ref = useRef(null);

  const setFocus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return [ref, setFocus];
}