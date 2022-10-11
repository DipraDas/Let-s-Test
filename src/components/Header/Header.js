import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>Let's Test</h1>
            </div>
            <div className="nav">
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;