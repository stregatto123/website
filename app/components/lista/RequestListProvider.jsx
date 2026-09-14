"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  STORAGE_KEY,
  SENDER_STORAGE_KEY,
  sanitizeEntries,
  sanitizeSender,
} from "../../lib/requestList";

/**
 * Stato condiviso della lista richiesta.
 *
 * - vive in localStorage, quindi persiste fra pagine e refresh dello stesso
 *   browser (nessun backend, nessun account);
 * - `ready` distingue il primo render server/idratazione dallo stato reale:
 *   il contatore viene mostrato solo dopo la lettura dello storage, così non
 *   c'è mismatch di idratazione;
 * - l'evento `storage` tiene allineate più schede aperte sullo stesso sito.
 */
const RequestListContext = createContext(null);

export function RequestListProvider({ children }) {
  const [items, setItems] = useState([]);
  const [sender, setSender] = useState({ name: "", business: "" });
  const [ready, setReady] = useState(false);

  // Lettura iniziale (solo lato client).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(sanitizeEntries(JSON.parse(raw)));
      const rawSender = window.localStorage.getItem(SENDER_STORAGE_KEY);
      if (rawSender) setSender(sanitizeSender(JSON.parse(rawSender)));
    } catch {
      // localStorage non disponibile (navigazione privata, storage pieno):
      // la lista funziona comunque, solo senza persistenza.
    }
    setReady(true);
  }, []);

  // Scrittura a ogni modifica, una volta terminata l'idratazione.
  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* vedi sopra */
    }
  }, [items, ready]);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(SENDER_STORAGE_KEY, JSON.stringify(sender));
    } catch {
      /* vedi sopra */
    }
  }, [sender, ready]);

  // Allineamento fra schede.
  useEffect(() => {
    function onStorage(event) {
      if (event.key !== STORAGE_KEY) return;
      try {
        setItems(sanitizeEntries(event.newValue ? JSON.parse(event.newValue) : []));
      } catch {
        /* valore illeggibile: si tiene lo stato corrente */
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const add = useCallback((entry) => {
    setItems((current) =>
      current.some((e) => e.id === entry.id) ? current : [...current, entry]
    );
  }, []);

  const remove = useCallback((id) => {
    setItems((current) => current.filter((e) => e.id !== id));
  }, []);

  const toggle = useCallback((entry) => {
    setItems((current) =>
      current.some((e) => e.id === entry.id)
        ? current.filter((e) => e.id !== entry.id)
        : [...current, entry]
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const setSenderField = useCallback((field, value) => {
    setSender((current) => ({ ...current, [field]: value }));
  }, []);

  const ids = useMemo(() => new Set(items.map((e) => e.id)), [items]);
  const has = useCallback((id) => ids.has(id), [ids]);

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      ready,
      has,
      add,
      remove,
      toggle,
      clear,
      sender,
      setSenderField,
    }),
    [items, ready, has, add, remove, toggle, clear, sender, setSenderField]
  );

  return (
    <RequestListContext.Provider value={value}>
      {children}
    </RequestListContext.Provider>
  );
}

export function useRequestList() {
  const context = useContext(RequestListContext);
  if (!context) {
    throw new Error(
      "useRequestList va usato dentro <RequestListProvider> (vedi app/layout.js)"
    );
  }
  return context;
}
