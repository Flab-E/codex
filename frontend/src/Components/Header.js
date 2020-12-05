import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <Link to="/" style={{textDecoration:'none'}}>
            <header style={headerStyle}>
                <h1>CODEX.io</h1>
            </header>
        </Link>
    );
}

const headerStyle = {
    color: '#fff',
    display: 'block',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
};

export default Header;