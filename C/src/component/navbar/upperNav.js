import { NavLink, useNavigate } from "react-router-dom";
import './index.css'
import { FaRegUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import { Redirect as is } from "../../utils/redirect";
import { useJwt } from "react-jwt";
import ThemeContext from "../../contexts/themeContext";

function UpperNav() {
    const {theme, setTheme} = useContext(ThemeContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!   darkMode);
        setTheme(darkMode ? 'light' : 'dark');
    }

    const loginButton = () => {
        return (
            <NavLink to="/auth/login">
                <button className={`loginButton-${theme}`}>Login</button>
            </NavLink>
        );
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/auth/login');
    }

    return (
        <>
            <ul className={`upperNav-ul-${theme}`}>
                <li className={`mainLogo-${theme}`}>Academic Resource Portal</li>
                <li className={`userDetail-${theme}`}>
                    <p>{!token && loginButton()}</p>
                    <FaRegUserCircle size={30}/>
                    <button onClick={handleLogout} style={{marginLeft:'1rem'}} className={`loginButton-${theme}`}>Logout</button>

                    <button onClick={toggleDarkMode} style={{marginLeft:'1rem'}} className={`loginButton-${theme}`}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
                </li>
            </ul>
        </>
    );
}

export default UpperNav;
