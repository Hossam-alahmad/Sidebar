import "./Css/bootstrap.rtl.min.css";
import "./Css/App.css";
import Home from "./Components/Home";
import Modal from "./Components/Modal";
import Sidebar from "./Components/Sidebar";
import { AppProvider } from "./Hooks/context";

function App() {
    return (
        <AppProvider>
            <div className="sidebar-app">
                <div className="container">
                    <Home />
                    <Sidebar />
                    <Modal />
                </div>
            </div>
        </AppProvider>
    );
}

export default App;
