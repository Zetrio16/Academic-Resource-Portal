import { useLocation } from "react-router-dom";
import Navigation from "../navbar/Navigation";
import { useContext } from "react";
import ThemeContext from "../../contexts/themeContext";

function PeerToPeerDetail() {
    const location = useLocation();
    const topic = location.state.topic;
    const { theme, setTheme } = useContext(ThemeContext);

    // Function to append theme to class names
    const appendThemeToClassNames = (classNames) => {
        return `${classNames}-${theme}`;
    };
    return ( 
        <>
            <Navigation/>
            <section style={{marginLeft:"16%"}}>
                <h1 className="ptpDetailHeading">{topic.title}</h1>

                <div style={{marginLeft:"5%"}} className={appendThemeToClassNames("resourceComments")}>
                        <h1 >Comments:</h1>
                        <p>Comments will be shown here.</p>
                    </div>
                    <div className={appendThemeToClassNames("resourceAddComment")}>
                        <textarea placeholder="Add your comments here!" rows="4"></textarea><br></br>
                        <button className={appendThemeToClassNames("addCommentBtn")}>Post Comment</button>
                    </div>
            </section>
        </>
     );
}

export default PeerToPeerDetail;