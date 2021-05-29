import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <Link to="#" className="navbar-brand">Logo</Link>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/main" className="nav-link">Employee</Link></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;