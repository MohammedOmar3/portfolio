import React from 'react'
import CountUp from 'react-countup';
import { ReactTyped } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faTrophy, faBriefcase, faUsers, faFolder } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Hero = () => {

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
                <img src="/assets/hero.jpg" alt="Hero"></img>
            </motion.div>
            <motion.div className='hero-item' variants={slideIn}>
                <h1>Hi, I am Mohammed <br /> Welcome to my Portfolio</h1>
                <div className="string">
                    <h4 className='specialize'>Specialize in</h4>
                    <ReactTyped
                        strings={[
                            "Web Design",
                            "Web Development",
                            "Digital Marketing",
                            "UI/UX Design"
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        backDelay={1500}
                        className='profession'
                    />
                </div>

                <div className='resume-socials'>
                    <motion.a href='#' className='hire-button' whileHover={{ scale: 1.1 }}>
                        Hire me!
                        <FontAwesomeIcon icon={faArrowRight} className='icon' />
                    </motion.a>

                    <motion.div className='wrapper' variants={fadeIn}>
                        <ul>
                            <li className='item'>
                                <a href='#' aria-label='Instagram'>
                                    <FontAwesomeIcon icon={faInstagram} className='icon' />
                                </a>
                            </li>
                            <li className='item'>
                                <a href='#' aria-label='Facebook'>
                                    <FontAwesomeIcon icon={faFacebook} className='icon' />
                                </a>
                            </li>
                            <li className='item'>
                                <a href='#' aria-label='X'>
                                    <FontAwesomeIcon icon={faXTwitter} className='icon' />
                                </a>
                            </li>
                            <li className='item'>
                                <a href='#' aria-label='Github'>
                                    <FontAwesomeIcon icon={faGithub} className='icon' />
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>

        <motion.section className="achievement" initial="hidden" animate="visible" variants={fadeIn}>
            <div className='achievement-items'>
                {[
                    {icon: faTrophy, count: 14, suffix: "%", title: "Job Achievements" },
                    {icon: faBriefcase, count: 50, suffix: "+", title: "Years of Experience" },
                    {icon: faUsers, count: 1500, suffix: "", title: "Customers" },
                    {icon: faFolder, count: 50, suffix: "+", title: "Project Completed" },
                ].map((item, index) => (
                    <motion.div className='achievement-item' key={index} variants={scaleUp}>
                        <FontAwesomeIcon icon={item.icon} className="achievement-icon" />

                        <CountUp end={item.count} duration={2} suffix={item.suffix} className='achievement-number' />
                        <h4>{item.title}</h4>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    </div>
  )
}

export default Hero