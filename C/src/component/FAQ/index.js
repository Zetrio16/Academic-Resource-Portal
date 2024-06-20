import { useState, useContext } from "react";
import Navigation from "../navbar/Navigation";
import ThemeContext from "../../contexts/themeContext";
import "./index.css";

function FAQ() {
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            title: "Question 01 : What is GPA and How it is computed?",
            answer: "It refers to the system that indicates Participant's performance in a Semester. It is a conversion of Letter Grades achieved by the Participants into the grade Points (GP) by multiplying with credit hours. The sum total of Grade Points are divided by total credit hours registered by participants in a semester to obtain GPA. Participant's performance will always be measured in term of GPA which can range from 0-4.00"
        },
        {
            id: 2,
            title: "Question 02 : How can I know my SGPA / CGPA?",
            answer: "Through Student Portal (fast.nu.edu.pk) using your login/password."
        },
        {
            id: 3,
            title: "Question 03 :  What is the required CGPA for my degree?",
            answer: "For the bachelor’s program it is 2.00, for the master's program it is 2.50, and for the Doctoral program, it is 3.00. Please refer to Participant ’s Hand Book for more details."
        },
        {
            id: 4,
            title: "Question 04 : Is there any difference between A+ or A grade?",
            answer: "Participants enrolled on / before Summer, 2005 get 4.00 and 3.70 grade points on 'A+' and 'A' respectively. However, participants enrolled after this period get 4.00 grade points on 'A+' and 'A'"
        }
    ]);

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
                <h1 className={appendThemeToClassNames("faqHeading")}>Frequently Asked Questions</h1>
                <div className={appendThemeToClassNames("faqs")}>
                    {faqs.map((faq) => {
                        return (
                            <div className={appendThemeToClassNames("faq")} key={faq.id}>
                                <h1>{faq.title}</h1>
                                <p>{faq.answer}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default FAQ;
