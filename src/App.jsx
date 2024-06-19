import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { Profile } from './components/Profile'
import { Login } from './components/login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode("light")
  }

  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider  value={{darkTheme,lightTheme,themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>
            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
      </div>

      <UserContextProvider>
        <div className=' p-10  border border-solid shadow-lg  rounded-lg  bg-white bg-opacity-15'>
          <h2 className='mb-4 pb-5 text-white text-4xl'>Login</h2>
          <Login/>
          <Profile/>
        </div>
      </UserContextProvider>
    </ThemeProvider>
  )
}

export default App
