// components/Navbar.jsx
import React from 'react';

function Navbar({ toggleDarkMode, darkMode }) {
    return (
        <nav className="navbar">
            <div className={`navbar-brand ${darkMode ? 'dark-mode-text' : ''}`}>
                Catatan App
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleDarkMode(); }}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
