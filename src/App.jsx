import "./app.css"
import { Route, Routes   } from "react-router-dom"
import { Header } from "./components/Header"
import { Login } from "./components/LoginForm/Login"
import { useState , useEffect} from "react"
import { Home } from "./components/Home/Home"
import { useContext } from "react"
import { LoginContext } from "./Conetxt/LoginContext/LoginContext"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
   

  const Context = useContext(LoginContext)


    return (

      


      <div>
         <Header />
        <Routes>
       
      
      <Route path="/login" element={<Login />}/>

      

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
  
      </Routes>
      </div>



    
   
 


   
  )
 
}

export default App