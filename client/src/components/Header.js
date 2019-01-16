import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import pig from '../assets/images/pig.gif'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item"><img src={pig} alt="" /></Link>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;