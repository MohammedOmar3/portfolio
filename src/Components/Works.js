import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Works = () => {

    const fadeIn = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut'} },
    };

    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);

    const isInView1 = useInView(sectionRef1, { margin: '-100px' });
    const isInView2 = useInView(sectionRef2, { margin: '-100px' });
    
  return (
    <div>
        <motion.section className="works" id="works" ref={sectionRef1}
            initial="hidden" animate={isInView1 ? 'visible' : 'hidden'} variants={fadeIn}>
            <div className='work-items'>
                <motion.div className="work-item" variants={fadeIn}>
                    <p className="social-app">SocialApp</p>
                    <h4>Hyper</h4>
                    <p>
                        Project was about precision and information. Thats all. Our design team helps clients achieve their marketing target
                        and branding that appeals to a website.
                    </p>
                    <div className="service-buttons">
                        <motion.a href='#' whileHover={{ scale: 1.1 }}>Branding</motion.a>
                        <motion.a href='#' whileHover={{ scale: 1.1 }}>Graphic Designs</motion.a>
                        <motion.a href='#' whileHover={{ scale: 1.1 }}>User Stories</motion.a>
                    </div>
                    <p className="testimony-quote">
                        &quot; The service was excellent. Template example is the next killer app.&quot;
                    </p>

                    <div className='profile'>
                        <motion.div className="profile-picture" variants={fadeIn}>
                            <img src="/assets/profile-pic1.jpg" alt="profile pic " />
                        </motion.div>
                        <div className="profile-text">
                            <h4>Mohammed Omar</h4>
                            <span>UI & UX designer</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="work-item" variants={fadeIn}>
                    <div className="project-image">
                        <img src="/assets/project1.png" alt="project image"/>
                    </div>
                </motion.div>
            </div>
        </motion.section>

        <motion.section ref={sectionRef2} initial="hidden" animate={isInView2 ? 'visible' : 'hidden'} variants={fadeIn}>
            <div className="work2=container">
                <motion.div className='left-column' variants={fadeIn}>
                    <div className="left-items">
                        <motion.div className='left-img' variants={fadeIn}>
                            <img src="/assets/project2.png" alt="project 2" />
                        </motion.div>
                        <div>
                            <p className="social-app">App</p>
                            <h4>Banking</h4>
                            <p>Project was about precision and information</p>
                            <div className="project-buttons">
                                <motion.a href='#' whileHover={{ scale: 1.1 }}>Branding</motion.a>
                                <motion.a href='#' whileHover={{ scale: 1.1 }}>Graphic Designs</motion.a>
                                <motion.a href='#' whileHover={{ scale: 1.1 }}>User Stories</motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='right-column' variants={fadeIn}>
                    <div className="right-items">
                        <motion.div className='right-img' variants={fadeIn}>
                            <img src="/assets/project3.png" alt="project 3" />
                        </motion.div>
                        <div>
                            <p className="social-app">UI/UX</p>
                            <h4>Web 3.0</h4>
                            <p>Project was about precision and information</p>
                            <div className="project-buttons">
                                <motion.a href='#' whileHover={{ scale: 1.1 }}>Branding</motion.a>
                                <motion.a href='#' whileHover={{ scale: 1.1 }}>Graphic Designs</motion.a>
                                <motion.a href='#' whileHover={{ scale: 1.1 }}>User Stories</motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    </div>
  );
}

export default Works