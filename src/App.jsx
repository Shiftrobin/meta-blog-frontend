import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext'
import { BlogProvider } from './context/BlogContext'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <BlogProvider>
        <Navbar /> 
          <main className={`min-h-screen ${darkMode ? "dark" : ""}`}>
          <Outlet /> 
          </main>
        <Footer />   
      </BlogProvider>
    </ThemeContext.Provider>
    </>
  )
}

export default App
