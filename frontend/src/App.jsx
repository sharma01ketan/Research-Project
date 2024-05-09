import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recruiter from "./Recruiter.jsx"
import Admin from "./Admin.jsx"
import Mock from './Mock.jsx';

function App() {

    return (
        <div style={{backgroundColor: "#eeeeee"}}
        >
            <Router>
                <Routes>
                <Route path={"/recruiters"} element={<Recruiter />} />
                <Route path={"/admin"} element={<Admin />} />
                <Route path={"/mock"} element={<Mock />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;