import React, { useState, useContext } from "react";
import userPic from "../../media/user.png";
import Navigation from "../navbar/Navigation";
import ThemeContext from "../../contexts/themeContext";
import "./index.css";

function Notifications() {
    const [notifications, setNotifications] = useState(["N1", "N2", "N3", "N4"]);

    // Accessing theme from context
    const { theme } = useContext(ThemeContext);

    // Function to append theme to class names
    const appendThemeToClassNames = (classNames) => {
        return `${classNames}-${theme}`;
    };

    return (
        <>
            <Navigation />
            <section style={{ marginLeft: "16%" }}>
                <div className={appendThemeToClassNames("notifications")}>
                    <h5 className={appendThemeToClassNames("notificationHeading")}>Notifications</h5>
                    {notifications.map((notification, index) => (
                        <div className={appendThemeToClassNames("notificationCard")} key={index}>
                            <img
                                className={appendThemeToClassNames("cardImage")}
                                src={userPic}
                                style={{ width: "4rem" }}
                                alt="userPic"
                            />
                            <div className={appendThemeToClassNames("cardContent")}>
                                <h5>Notification Title</h5>
                                <p>
                                    malesuada fames ac turpis egestas integer eget aliquet nibh praesent
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Notifications;
