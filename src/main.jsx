import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LoginProvider } from './Conetxt/LoginContext/LoginContext'
import {BrowserRouter} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(

<LoginProvider>
<BrowserRouter>
        <App />
        </BrowserRouter>
    </LoginProvider>
   
)
