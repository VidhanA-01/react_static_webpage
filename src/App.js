import Main from "./components/Main.js"
import Navbar from "./components/Navbar.js"
import React from 'react';
export default function App(){
  const [darkMode,setDarkMode] = React.useState(false)
  function toggleMode(){
      setDarkMode(prev => (!prev))
      if(darkMode)
      {
        document.body.style.backgroundColor = "white"
      }
      else
      {
        document.body.style.backgroundColor = "black"
      }
  }
  return(
    <div className="container">
            <Navbar
            darkMode = {darkMode}
            toggleDarkMode = {toggleMode}
             />
            <Main 
            darkMode = {darkMode}
            toggleDarkMode = {toggleMode}
            />
        </div>
  )
}
