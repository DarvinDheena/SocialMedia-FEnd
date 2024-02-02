import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage'
import HomePage from './pages/homePage/HomePage'
import ProfilePage from './pages/profilePage/profilepage';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element ={ <LoginPage />}></Route>
          <Route path='/home' element={ <HomePage />}></Route>
          <Route path='/profile/:userId' element={ <ProfilePage />} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;