import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext()

export const  LoginProvider = ({ children })=>{
    const [field , setField] = useState({
        email : "",
        password : ""
      })
      const [auth, setAuth] = useState(true);
      const userData = localStorage.length === 0;
      const userPer = localStorage.length === 1 ;


    return <LoginContext.Provider value={{field ,setField , auth, userData, userPer }}>{children}</LoginContext.Provider>
}