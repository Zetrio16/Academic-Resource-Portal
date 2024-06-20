import { NavLink, useNavigate } from "react-router-dom";
import Navigation from "../navbar/Navigation";
import { useJwt } from "react-jwt";
import './index.css'
import { Redirect as isAuthenticate } from "../../utils/redirect";
import { useContext, useEffect } from "react";
import ThemeContext from "../../contexts/themeContext";

const Home = ()=>{
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const { decodedToken, isExpired } = useJwt(token);
    const isAuth = isAuthenticate()
    useEffect(()=>{
        setTimeout(() => {
            if(!isAuth)
            {
                navigate("/auth/login")
            }
          }, 1000);
    }, [navigate, isAuth])
    
    const { theme, setTheme } = useContext(ThemeContext);

    // Function to append theme to class names
    const appendThemeToClassNames = (classNames) => {
        return `${classNames}-${theme}`;
    };

    return(<>
        <Navigation/>
        
        <section className={appendThemeToClassNames("leaveSideNav")}>
            <div className={appendThemeToClassNames("personalInfo")}>
            {decodedToken && (
                        <>
                            <p>Name: {`${decodedToken.firstName ? decodedToken.firstName.toUpperCase() : ''} ${decodedToken.lastName ? decodedToken.lastName.toUpperCase() : ''}`}</p>
                            <p>Email: {decodedToken.email}</p>
                        </>
                    )}
            </div>

            <div className={appendThemeToClassNames("userUploadedResources")}>
                <h1>Uploaded Resources:</h1>
                <p>Nothing to show yet...</p>
            </div>

            <div className={appendThemeToClassNames("userResourceBookmarks")}>
                <h1>Bootmarks/Favourite Resources:</h1>
                <p>Nothing to show yet...</p>
            </div>
        </section>
    </>)
}

export default Home;