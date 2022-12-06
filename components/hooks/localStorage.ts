import { useState } from "react";
import { log } from "../../utils/helpers";

function useLocalStorage<T>(key: string, initialValue: T) {
  const isWindow = !(undefined === typeof window);
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (isWindow) {
      try {
        const item = window.localStorage.getItem(key);
        log("useLocalStorage", key, item || null);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        log(error);
      }
    }
    return initialValue;
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if ("undefined" !== typeof window) {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      log("localStorage", "setValue", key, value, error);
    }
  };

  return [storedValue, setValue];
}

const storeLocal = (key: string, value: any) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
const getLocal = (key: string) => {
  if (typeof localStorage !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

export { useLocalStorage, storeLocal, getLocal };
