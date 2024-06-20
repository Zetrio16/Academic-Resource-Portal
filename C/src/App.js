import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './component/auth/login'
import Register from './component/auth/register'
import Home from './component/Home/index'
import Resources from './component/Resources'
import Notifications from './component/Notifications'
import UserSettings from './component/userSettings'
import Playlists from './component/Playlists'
import FAQ from './component/FAQ'
import ResourceDetail from './component/Resources/resourceDetail'
import ThemeContext from './contexts/themeContext'
import { useState } from 'react'
import PlaylistDetail from './component/Playlists/playlistDetail'
import PeerToPeer from './component/PeerToPeer'
import PeerToPeerDetail from './component/PeerToPeer/peerTopeerDetail'

function App () {
  const [theme, setTheme] = useState('light')
  const value = { theme, setTheme }
  if(theme === 'dark'){
    document.body.style.backgroundColor = '#2d3436';
  }
  else{
    document.body.style.backgroundColor = 'white';
  }
  return (
    <ThemeContext.Provider value={value}>
      <Router>
        <Routes>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/`resources`' element={<Resources />} />
          <Route exact path='/resources/:id' element={<ResourceDetail />} />
          <Route exact path='/notifications' element={<Notifications />} />
          <Route exact path='/playlists' element={<Playlists />} />
          <Route exact path='/playlists/:id' element={<PlaylistDetail />} />
          <Route exact path='/FAQs' element={<FAQ />} />
          <Route exact path='/peertopeer' element={<PeerToPeer />} />
          <Route exact path='/peertopeer/:id' element={<PeerToPeerDetail />} />
          <Route exact path='/user/settings' element={<UserSettings />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  )
}

export default App;
