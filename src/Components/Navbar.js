import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '..//assets/logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen( !isMenuOpen );
    }

  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo} alt="logo" className="App-logo" />
            {/* <a href="mailto:example.com?subject=Contact&body=Hello!">info@codewithmxmd.com</a> */}

            <div className='menu'>
                <button className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
                </button>

                <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
                    <li className="nav-item">
                        <a href='#services' className='nav-link'>Services</a>
                    </li>
                    <li className="nav-item">
                        <a href='#works' className='nav-link'>Works</a>
                    </li>
                    <li className="nav-item">
                        <a href='#resume' className='nav-link'>Resume</a>
                    </li>
                    <li className="nav-item">
                        <a href='#skills' className='nav-link'>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href='#testimonials' className='nav-link'>Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a href='#contact' className='nav-link'>Contact</a>
                    </li>

                    {/* <li className="nav-item">
                        <motion.a 
                            href="/resume.pdf" 
                            download="Mohammed_Omar_CV.pdf"
                            className="resume-button"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05}}
                            transition={{ duration: 0.3 }}
                        >
                            Resume
                            <img src="download.png" alt="Download icon" className="resume-icon" />
                        </motion.a>
                    </li> */}

                </ul>

            </div>

        </div>
    </div>
  )
}

export default Navbar