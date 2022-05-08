import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModelOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    const openModel = () => setIsModalOpen(true);
    const closeModel = () => setIsModalOpen(false);

    return (
        <AppContext.Provider
            value={{
                isModelOpen,
                isSidebarOpen,
                openModel,
                closeModel,
                openSidebar,
                closeSidebar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
