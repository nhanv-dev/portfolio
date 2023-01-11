import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {projects} from './data';

export default function App() {
    return (
        <Router>
            <Routes>
                {projects.map((project, index) => (
                    <Route exact={true} key={index}
                           path={`/${project.slug}`} element={<project.component/>}
                    />
                ))}
                <Route exact={true} path={"/home"} element={<Home/>}/>
                <Route exact={true} path={"/"} element={<Home/>}/>
                <Route path={"/*"} element={<Home/>}/>
            </Routes>
        </Router>
    )
}