import { useContext, useState } from "react";
import Navigation from "../navbar/Navigation";
import "./index.css"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../contexts/themeContext";

function Playlists() {
    const {theme,setTheme} = useContext(ThemeContext);

    // Assuming you have a list of playlists
    const [playlists, setPlaylists] = useState([
        {
            id: 1,
            title: 'Playlist 1',
            description: 'Playlist 1 description',
        },
        {
            id: 2,
            title: 'Playlist 2',
            description: 'Playlist 2 description',
        },
        {
            id: 3,
            title: 'Playlist 3',
            description: 'Playlist 3 description',
        },
    ]);
    
    return ( 
        <>
            <Navigation/>
            <section style={{marginLeft:"16%"}}>
                <div className={`cards-${theme}`}>
                    {playlists.map(playlist => (
                        <div className="card" key={playlist.id}>
                            <section className={`resourceTexts-${theme}`}>
                                <h1>{playlist.title}</h1>
                                <p>{playlist.description} </p>
                            </section>
                            <NavLink to={`/playlists/${playlist.id}`} state={{playlist: playlist}}>
                                <button className="viewBtn">View Playlist</button>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </section>
        </>
     );
}

export default Playlists;
