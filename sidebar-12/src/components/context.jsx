import { createContext, useState, useContext } from "react";
import { FaSadCry } from "react-icons/fa";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    console.log("open sidebar is working");
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModel = () => {
    setIsModelOpen(true);
    console.log("open model is working");
  };
  const closeModel = () => {
    setIsModelOpen(false);
    console.log("working");
  };
  return (
    <AppContext.Provider
      value={{
        isModelOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openModel,
        closeModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
