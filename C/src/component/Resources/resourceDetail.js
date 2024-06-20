import { useLocation } from "react-router-dom";
import Navigation from "../navbar/Navigation";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../../contexts/themeContext";

function ResourceDetail() {
    const location = useLocation();
    const resource = location.state.resource
    const { theme, setTheme } = useContext(ThemeContext);

    // Function to append theme to class names
    const appendThemeToClassNames = (classNames) => {
        return `${classNames}-${theme}`;
    };
    return ( 
        <>
            <Navigation/>
            {console.log(resource)}
            <section  style={{marginLeft:"16%"}}>
                <div className={appendThemeToClassNames("resourceDetails")}>
                    <h1>{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Resource will show here...</p>
                </div>
                <hr className={appendThemeToClassNames("resourceDetailLine")}></hr>
                <div className={appendThemeToClassNames("resourceFooter")}>
                    <div className={appendThemeToClassNames("resourceRatting")}>
                        <h1>Rating: 4.4</h1>
                        <div className={appendThemeToClassNames("ratingStars")}>
                            <FaStar size={25}/>
                            <FaStar size={25}/>
                            <FaStar size={25}/>
                            <FaStar size={25}/>
                            <FaStar size={25}/>
                        </div>
                    </div>
                    <div className={appendThemeToClassNames("resourceComments")}>
                        <h1>Comments:</h1>
                    </div>
                    <div className={appendThemeToClassNames("resourceAddComment")}>
                        <textarea placeholder="Add your comments here!" rows="4"></textarea><br></br>
                        <button className={appendThemeToClassNames("addCommentBtn")}>Post Comment</button>
                    </div>
                </div>
            </section>
        </>
     );
}

export default ResourceDetail;
