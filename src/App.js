import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import {AppContext} from "./store/Context.js"
import LoginPage from './pages/Login/LoginPage';

function App () {

  const [appData] = useContext(AppContext)

  return(
    <>
        <Router>
        <div>
          <NavBar/>
          { appData.loggedIn ? 
           <div>
           <Routes>
               <Route exact path="/" element={<div>App</div>} />
               <Route exact path="/locations" element={<div>location</div>} />
               <Route exact path="/profile" element={<div>profile</div>} />
           </Routes>
       </div> : 
           <LoginPage/>}
        </div>
      </Router>
    </>
  )
}

export default App;