import {useState} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from "../Component/Main/Main.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import rout from "../Component/Navigate/Rout.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <Main/>
            <br/>
            <br/>
            <Routes>
                {rout.map((val, inddex) => (
                    <Route path={val.path} element={val.component}/>
                ))}
                <Route path={'*'} element={<Home/>}/>
            </Routes>

        </div>
    )
}

export default App
