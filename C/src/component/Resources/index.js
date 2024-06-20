import { useContext, useState } from "react";
import Navigation from "../navbar/Navigation";
import "./index.css"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import ThemeContext from "../../contexts/themeContext";

function Resources() {

    const [submitResource, setSubmitResource] = useState({
        title:'',
        description:'',
        category:''
    })
    const [findResource, setFindResource] = useState('')
    const [uploadPageStatus, setUploadPageStatus] = useState(false)
    const {theme,setTheme} = useContext(ThemeContext);
    const [resources, setResources] = useState([
        {
            id:1,
            title:'Numerical Computing',
            description:'Past paper of numerical computing',
            media:'files',
            category:'past paper'
        },
        {
            id:2,
            title:'Numerical Computing',
            description:'Past paper of numerical computing',
            media:'files',
            category:'past paper'
        },
        {
            id:3,
            title:'Numerical Computing',
            description:'Past paper of numerical computing',
            media:'files',
            category:'past paper'
        },
        {
            id:4,
            title:'Numerical Computing 2021',
            description:'Past paper of numerical computing',
            media:'files',
            category:'past paper'
        },
        {
            id:5,
            title:'Numerical Computing',
            description:'Past paper of numerical computing',
            media:'files',
            category:'past paper'
        },
        {
            id:6,
            title:'Numerical Computing ',
            description:'Past paper of Data Structures',
            media:'files',
            category:'past paper'
        },
        {
            id:7,
            title:'Numerical Computing',
            description:'Past paper of numerical computing Past paper of numerical computing Past paper of numerical computing',
            media:'files',
            category:'past paper'
        },
        {
            id:8,
            title:'OOP',
            description:'Past paper of numerical computing',
            media:'files',
            category:'past paper'
        }
    ])

    const filteredResources = resources.filter(resource => {
        const searchText = findResource.toLowerCase();
        return (
            resource.title.toLowerCase().includes(searchText) ||
            resource.description.toLowerCase().includes(searchText) ||
            resource.category.toLowerCase().includes(searchText)
        );
    });

    const handleUploadButton = ()=>{
        setUploadPageStatus(!uploadPageStatus);
    }

    const handleBookmarkSign = ()=>{
        console.log("id")
    }

    return ( 
        <>
            <Navigation/>
            <section style={{marginLeft:"16%"}}>

                <div className={`resourceSearch-${theme}`}>
                    <input type="text" value={findResource} placeholder="Search for Resource" onChange={e=>setFindResource(e.target.value)}/>
                    <button onClick={handleUploadButton} className={`uploadResourceBtn-${theme}`} >Upload</button>
                </div>

               { uploadPageStatus && <div className="uploadResourceContainer">
                    <input type="text" placeholder="Resource Title"/>
                    <input type="text" placeholder="Resource Description"/>
                    <span className="submitBtns">
                        <select id="category">
                            <option value="Past Paper">Past Paper</option>
                            <option value="Subject Notes">Subject Notes</option>
                            <option value="Study Guide">Study Guide</option>
                        </select>
                        <button>Submit</button>
                    </span>
                </div>}
 
                <div className={`cards-${theme}`}>{filteredResources.map(resource=>{
                    return(
                        <div className="card" key={resource.id}>
                            <section className="resourceTexts">
                                <h1>{resource.title}<span onClick={handleBookmarkSign} className="bookmarkSign"><FaStar /></span></h1>
                                <p>{resource.description.slice(0, 35)} ...</p>
                                <p><span style={{fontWeight:"bolder"}}>Category:</span> {resource.category}</p>
                            </section>
                            <NavLink to={`/resources/${resource.id}`} state={{resource : resource}}>
                                <button className="viewBtn">View</button>
                            </NavLink>
                            <button className={`downloadBtn-${theme}`}><FaDownload size={15}/></button>
                        </div>
                    )
                })}</div>
            </section>
        </>
     );
}

export default Resources;