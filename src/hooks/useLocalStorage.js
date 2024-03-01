import { useState, useEffect } from "react";

export default function useLocalStorage(name, defaultValue) {
  const json = JSON.parse(localStorage.getItem(name));
  if (!json) {
    localStorage.setItem(name, JSON.stringify(defaultValue));
  }
  const [value, setValue] = useState(json);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  return [value, setValue];
}
