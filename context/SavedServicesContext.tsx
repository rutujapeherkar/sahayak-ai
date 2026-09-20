'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface SavedServicesContextType {
  savedIds: string[];
  isSaved: (serviceId: string) => boolean;
  toggleSave: (serviceId: string) => void;
  removeSaved: (serviceId: string) => void;
}

const SavedServicesContext = createContext<SavedServicesContextType | undefined>(undefined);

export function SavedServicesProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('sahayak_saved_services');
      if (stored) {
        setSavedIds(JSON.parse(stored));
      }
    } catch {
      // Ignore localStorage read errors
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('sahayak_saved_services', JSON.stringify(savedIds));
      } catch {
        // Ignore write errors
      }
    }
  }, [savedIds, isLoaded]);

  const isSaved = (serviceId: string) => savedIds.includes(serviceId);

  const toggleSave = (serviceId: string) => {
    setSavedIds((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]
    );
  };

  const removeSaved = (serviceId: string) => {
    setSavedIds((prev) => prev.filter((id) => id !== serviceId));
  };

  return (
    <SavedServicesContext.Provider value={{ savedIds, isSaved, toggleSave, removeSaved }}>
      {children}
    </SavedServicesContext.Provider>
  );
}

export function useSavedServices() {
  const context = useContext(SavedServicesContext);
  if (!context) {
    throw new Error('useSavedServices must be used within a SavedServicesProvider');
  }
  return context;
}
