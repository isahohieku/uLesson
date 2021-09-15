import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@routes";
import '../styles/index.scss';

const App = () => {
    return (
        <div>
            <Router>
                <Routes />
            </Router>
        </div>
    );
};
export default App;
