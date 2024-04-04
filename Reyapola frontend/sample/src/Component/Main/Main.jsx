import './Main.css'
import {NavLink} from "react-router-dom";
import rout from "../Navigate/Rout.jsx";

export default function Main() {
    return (
        <div className='nav'>
            {rout.map((val, index) => (
                <ul className='ul'>
                    <li className='li'>
                        <NavLink to={val.path}>{val.name}</NavLink>
                    </li>
                </ul>
            ))}
        </div>
    )
}