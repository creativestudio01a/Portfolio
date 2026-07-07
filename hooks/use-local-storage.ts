"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);
  const initialRef = useRef(initialValue);

  useEffect(() => {
    setIsHydrated(true);
    try {
      const stored = window.localStorage.getItem(key);
      if (stored) {
        setValue(JSON.parse(stored) as T);
      }
    } catch {
      setValue(initialRef.current);
    }
  }, [key]);

  const updateValue = useCallback(
    (nextValue: T | ((current: T) => T)) => {
      setValue((current) => {
        const resolved = typeof nextValue === "function" ? (nextValue as (current: T) => T)(current) : nextValue;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          // Browsers can deny storage in private contexts; keep the UI usable anyway.
        }
        return resolved;
      });
    },
    [key]
  );

  return [value, updateValue, isHydrated] as const;
}
