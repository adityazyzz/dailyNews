import React from 'react'
import {
  Link
} from "react-router-dom";

// api key -> d777155ce1994c36851888ab019f8c9e



const Navbar = (props)=> {
  
    return (
      <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">News Monkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-1">
          <Link className = {`nav-link ${props.activeNav === "general" ? "active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item mx-1">
          <Link className={`nav-link ${props.activeNav === "business" ? "active":""}`} to="/business">Business</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className={`nav-link ${props.activeNav === "entertainment" ? "active":""}`} to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className={`nav-link ${props.activeNav === "health" ? "active":""}`} to="/health">Health</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className={`nav-link ${props.activeNav === "science" ? "active":""}`} to="/science">Science</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className={`nav-link ${props.activeNav === "sports" ? "active":""}`} to="/sports">Sports</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className={`nav-link ${props.activeNav === "technology" ? "active":""}`} to="/technology">Technology</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
      </>
    )
  
}

export default Navbar