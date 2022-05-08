import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useGlobalContext } from "../Hooks/context";
const Home = () => {
    const { openModel, openSidebar } = useGlobalContext();
    console.log(useGlobalContext());
    return (
        <div className="home">
            <div className="navbar">
                <button className="btn" onClick={openSidebar}>
                    <HiOutlineMenuAlt2 className="menu-icon " />
                </button>
            </div>
            <div className="content position-absolute top-50 end-50">
                <button className="btn btn-primary" onClick={openModel}>
                    Show Model
                </button>
            </div>
        </div>
    );
};

export default Home;
