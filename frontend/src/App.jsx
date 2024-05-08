import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recruiter from "./Recruiter.jsx"
import Admin from "./Admin.jsx"

function App() {

    return (
        <div style={{backgroundColor: "#eeeeee"}}
        >
            <Router>
                <Routes>
                <Route path={"/recruiters"} element={<Recruiter />} />
                <Route path={"/admin"} element={<Admin />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;