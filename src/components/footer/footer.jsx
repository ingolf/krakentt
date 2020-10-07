import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Kraken TT © {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
