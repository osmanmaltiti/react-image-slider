import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css'

const App = () => {
  return (
    <div className='main-app'>
      <Navbar/>
      <Home/>
    </div>
  )
}
export default App;