import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Navbar() {
  return (
    <nav>
        <h3>Notary</h3>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Add"}>Add</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar