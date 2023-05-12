import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
     <div className="company-name">NetFlix</div>
     <button className="logout-button"><Link to="/login">Logout</Link></button>
     <Link to="/">Click</Link>
    </header>

  )
}

