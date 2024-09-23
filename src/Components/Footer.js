import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <p>{new Date().getFullYear()} omxmd. All rights reserved.</p>
        </div>

    </footer>
  )
}

export default Footer