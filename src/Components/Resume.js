import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Avatar from '..//assets//avatar.png'

const Resume = () => {
    const fadeIn = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut'} },
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: '-100px' });

  return (
    <motion.div id="resume" ref={sectionRef} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <section>
            <div className="about">
                <motion.div className="about-item" variants={fadeIn} whileFocus={{ scale: 1.02 }}>
                    <h1>About me</h1>
                    <p className="bio">
                        Hello! My name is <span>Mohammed Omar.</span> <br />
                        I am a Software Developer based in Milton Keynes with Experience through projects and university
                    </p>

                    <p className="bio">
                        <span>My Objective:</span> Challenge myself in a new environment to learn, developer and improve my skills 
                        through different projects and contribute more to the company with my abilities.
                    </p>

                    <h4 className="contact">
                        Contact
                    </h4>
                    <div className="contact-links">
                        <div classname="contact-items">
                            <a href="">o.mohammed3@hotmail.com <br /></a>
                            <a href="">LinkedIn.com/MohammedOmar</a>
                        </div>

                        <div className="contact-items">
                            <a href="tel:+447494140582">+44 7494 1405 82</a>
                            <a href="#">omxmd.hashnode.dev</a>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="about-item" variants={fadeIn} initial={{ opacity: 0, x:50 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }}>
                    <img src={Avatar} alt="Profile of Mohammed Omar" />
                </motion.div>

            </div>
        </section>
    </motion.div>
  );
}

export default Resume