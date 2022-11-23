import React from 'react';
import Database from "./components/database";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from "./components/LoginPage";

export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='database' element={<Database/>}/>
                    <Route path='/' element={<Login/>}/>
                </Routes>
            </div>
        </Router>
    )

}

