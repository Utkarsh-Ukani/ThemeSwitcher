
import './App.css'
import { Profile } from './components/Profile'
import { Login } from './components/login'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      <UserContextProvider>
      
        <div className=' p-10  border border-solid shadow-lg  rounded-lg  bg-white bg-opacity-15

 '>
          <h2 className='mb-4 pb-5 text-white text-4xl'>Login</h2>
          <Login/>
          <Profile/>
        </div>
      
      </UserContextProvider>
    </>
  )
}

export default App
