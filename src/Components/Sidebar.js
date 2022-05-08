import React from "react";
import { links } from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Hooks/context";
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <div
            className={`${
                isSidebarOpen ? "show-sidebar" : ""
            } sidebar shadow border p-4 position-fixed top-0 end-0 bg-white`}
        >
            <div className="close-icon position-relative text-start">
                <button className="btn" onClick={closeSidebar}>
                    <FaTimes className="icon fs-2 text-danger" />
                </button>
            </div>
            <div className="logo mb-4">
                <a className="nav-brand text-decoration-none" href="/">
                    Panda
                </a>
            </div>
            <div className="links">
                <ul className="list-unstyled p-0 m-0">
                    {links.map(item => {
                        return (
                            <li key={item.id} className="p-2 fs-5 ">
                                <a
                                    href={item.url}
                                    className="text-decoration-none d-block text-primary"
                                >
                                    {item.icon} {item.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
