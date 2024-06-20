import { useState } from "react";
import Navigation from "../navbar/Navigation";
import './index.css'
import { NavLink } from "react-router-dom";

function PeerToPeer() {

    const [addTopicStatus, setAddTopicStatus] = useState(false)
    const [topics, setTopics] = useState([
        {id:1,title:'Lorem Ipsum is simply dummy text of the printing  industry.'}, 
        {id:2,title:'Lorem Ipsum is simply  of the printing and typesetting industry.'},
        {id:3,title:'Lorem Ipsum is simply dummy text of the printing and typesetting '},
        {id:4,title:'Lorem Ipsum is simply dummy text of the printing.'}
    ])

    return ( 
        <>
            <Navigation/>
            <section style={{marginLeft:"16%"}}>
                    <div className="peertopeerHeading">
                        <h1 className="ptpMainHeading">Peer to Peer</h1>
                        <button onClick={()=>setAddTopicStatus(!addTopicStatus)}>{!addTopicStatus ? 'Add a topic' :'Cancel'}</button>
                    </div>

                    { addTopicStatus && <div className="addPtpTopic">
                        <input type="text" placeholder="Add a topic"/>
                        <button>Submit</button>
                    </div>}

                    <div className="ptopTopics">
                        {topics.map(topic=>{
                            return(
                                <div className="ptopTopic" key={topic.id}>
                                    <NavLink to={`/peertopeer/${topic.id}`} state={{topic : topic}}>
                                        <h1>{topic.title}</h1>
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>
            </section>
        </>
     );
}

export default PeerToPeer;