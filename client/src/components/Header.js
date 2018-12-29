import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menue">
            <div className="right menu">
                <Link to="/" className="item">Streamer</Link>
            </div>
        </div>
    )
}

export default Header;