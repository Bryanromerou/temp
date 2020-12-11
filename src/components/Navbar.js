import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <div 
                        className="menu-icon"
                        onClick={ handleClick }>
                        { click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                        <li className="nav-item">
                            <Link to="homepage" activeClass="active" spy={true} smooth = {true} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="aboutme" activeClass="active" spy={true} smooth = {true} className="nav-link">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="myprojects" activeClass="active" spy={true} smooth = {true} className="nav-link">
                                My Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="mySkills" activeClass="active" spy={true} smooth = {true} className="nav-link">
                                My Stack
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" activeClass="active" spy={true} smooth = {true} className="nav-link">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar