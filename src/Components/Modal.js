import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Hooks/context";
const Modal = () => {
    const { isModelOpen, closeModel } = useGlobalContext();
    return (
        <div
            className={`${
                isModelOpen ? "show-model" : ""
            } model position-absolute top-50 end-50 bg-light border shadow rounded p-2 w-75`}
        >
            <div className="close-icon position-relative text-start text-danger">
                <button className="btn text-danger" onClick={closeModel}>
                    <FaTimes className="fs-1 icon" />
                </button>
            </div>
            <div className="content fw-bold fs-4 text-center">
                <p>This is Model Box</p>
            </div>
        </div>
    );
};

export default Modal;
