import React from 'react'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import {  useNavigate, Outlet } from 'react-router-dom'
import { LoginContext } from '../Conetxt/LoginContext/LoginContext'


function LoginSession() {

    const Context = useContext(LoginContext)
    const {auth , userData , userPer} = Context

    const Navigate = useNavigate()


    useEffect(()=>{
        if(userData){
            Navigate("/login")
        }else if(userPer){
            Navigate("/")
        }

    })


    return <Outlet />
}

export default LoginSession