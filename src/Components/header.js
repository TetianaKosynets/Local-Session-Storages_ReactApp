import React from 'react';
import { Link } from 'react-router-dom';

const Header = function () {
    return (
        <div>
            <div style={styles.header}>
                <Link style={styles.headerLink} to="/">Home</Link>
                <Link style={styles.headerLink} to="/about">About</Link>
            </div>
        </div>
    );
};

const styles = {
    header: {
        padding: '20px 100px',
        fontWeigth: 'bold',
        fontSize: 20,
        backgroundColor: '#222',
        color: '#fff'
    },

    headerLink: {
        textDecoration: 'none',
        marginRight: '20px',
        color: '#fff'
    }
}

export default Header;