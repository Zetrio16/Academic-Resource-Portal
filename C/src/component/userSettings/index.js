import { useContext } from "react";
import Navigation from "../navbar/Navigation";
import ThemeContext from "../../contexts/themeContext";
import "./index.css"
function UserSettings() {
    const {theme,setTheme} = useContext(ThemeContext);
        
    return ( 
        <>
            <Navigation/>
            <section style={{marginLeft:"16%"}}>
                    <h1 className={`title-${theme}`}>User Settings page</h1>
            </section>
        </>
     );
}

export default UserSettings;