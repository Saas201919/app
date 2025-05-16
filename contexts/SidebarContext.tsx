
import React, { createContext, useContext, useState, useEffect } from 'react';

type SidebarContextType = {
  sidebarVisible: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

const defaultContext: SidebarContextType = {
  sidebarVisible: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
};

const SidebarContext = createContext<SidebarContextType>(defaultContext);

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <SidebarContext.Provider value={{ sidebarVisible, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
