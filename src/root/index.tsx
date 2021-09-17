import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Routes from "@routes";
import '../styles/index.scss';

const App = () => {
    return (
        <Router>
            <ToastContainer />
            <Routes />
        </Router>
    );
};
export default App;
