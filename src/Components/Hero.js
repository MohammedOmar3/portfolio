import React, { useState } from 'react'
import CountUp from 'react-countup';
import { ReactTyped } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faXTwitter, faLinkedin, faHashnode } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faTrophy, faBriefcase, faUsers, faFolder, faBlog } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Avatar from '..//assets//avatar.png'

const Hero = () => {
    const [xParticles, setXParticles] = useState([]);

  // Function to create random X's positions
  const generateXParticles = () => {
    const particles = Array.from({ length: 3 }).map(() => {
      const angle = Math.random() * 2 * Math.PI; // Random angle in radians
      const distance = Math.random() * 100 + 50; // Random distance from the center
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        rotate: Math.random() * 360, // Random rotation
      };
    });
    setXParticles(particles);
    setTimeout(() => setXParticles([]), 1000); // Clear the particles after 1 second
  };

    const fadeIn = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: { duration: 1} },
    };

    const slideIn = {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0, transition: { duration: 1} },
    };

    const scaleUp = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1, transition: { duration: 0.8} },
    };

  return (
    <div>
        <motion.section className='hero' initial='hidden' animate='visible' variants={fadeIn}>
            <motion.div className='hero-content' variants={scaleUp}>
            <div className="hero-image-container" onClick={generateXParticles}>
            <img src={Avatar} alt="Hero" />
            {/* X particles */}
            {xParticles.map((particle, index) => (
              <motion.div
              key={index}
              className="x-particle"
              initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              animate={{ x: particle.x, y: particle.y, rotate: particle.rotate, opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              >
                X
              </motion.div>
            ))}
          </div>
            </motion.div>
            <motion.div className='hero-item' variants={slideIn}>
                <h1>Hi, I am Mohammed <br /> Welcome to my Portfolio</h1>
                <div className="string">
                    <h4 className='specialize'>Specialize in</h4>
                    <ReactTyped
                        strings={[
                            "Software Development",
                            "Web Development",
                            "Graphic Designing",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        backDelay={1500}
                        className='profession'
                    />
                </div>

                <div className='resume-socials'>
                    {/* <motion.a href='#' className='hire-button' whileHover={{ scale: 1.1 }}>
                        Hire me!
                        <FontAwesomeIcon icon={faArrowRight} className='icon' />
                    </motion.a> */}

                    <motion.div className='wrapper' variants={fadeIn}>
                        <ul>
                            <li className='item'>
                                <a href='https://www.linkedin.com/in/mohammed-omar-a03b42222/' target="_blank" aria-label='LinkedIn'>
                                    <FontAwesomeIcon icon={faLinkedin} className='icon' />
                                </a>
                            </li>
                            <li className='item'>
                                <a href='https://github.com/MohammedOmar3' target="_blank" aria-label='Github'>
                                    <FontAwesomeIcon icon={faGithub} className='icon' />
                                </a>
                            </li>
                            <li className='item'>
                                <a href='https://omohammed.hashnode.dev/' target="_blank" aria-label='Hashnode'>
                                    <FontAwesomeIcon icon={faHashnode} className='icon' />
                                </a>
                            </li>
                            <li className='item'>
                                <a href='https://github.com/MohammedOmar3' target="_blank" aria-label='Github'>
                                    <FontAwesomeIcon icon={faXTwitter} className='icon' />
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>

        <motion.section className="achievement" initial="hidden" animate="visible" variants={fadeIn}>
            {/* <div className='achievement-items'>
                {[
                    {icon: faTrophy, count: 14, suffix: "%", title: "Job Achievements" },
                    {icon: faBriefcase, count: 50, suffix: "+", title: "Years of Experience" },
                    {icon: faUsers, count: 1500, suffix: "", title: "Customers" },
                    {icon: faFolder, count: 50, suffix: "+", title: "Project Completed" },
                ].map((item, index) => (
                    <motion.div className='achievement-item' key={index} variants={scaleUp}>
                        <h4> <br /> </h4>
                        <FontAwesomeIcon icon={item.icon} className="achievement-icon" />

                        <CountUp end={item.count} duration={2} suffix={item.suffix} className='achievement-number' />
                        <h4>{item.title}</h4>
                    </motion.div>
                ))}
            </div> */}
        </motion.section>
    </div>
  )
}

export default Hero