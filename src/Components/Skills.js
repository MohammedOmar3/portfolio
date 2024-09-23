import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Skills = () => {
    const fadeInUp = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut'} },
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: '-100px' });

  return (
    <motion.div id="skills" ref={sectionRef} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeInUp}>
        <section>
            <h1>My Skills</h1>
            <div className="experience-items">
                <motion.div className="experience-item" variants={fadeInUp} whileHover={{ scale:1.02 }}>
                    <div className="education">
                        <h4 className="skills-header"> Education</h4>
                        <p>2018 - 2022</p>
                    </div>
                    <p className="university">Aston Univeristy - BSc Computer Science</p>
                    <div className="skills">
                        <h4 className="skills-header">Technical Skills</h4>
                        <div className="skills-images">
                            <img src="/assets/xd.png" alt="Adobe XD" />
                            <img src="/assets/figma.png" alt="Figma" />
                            <img src="/assets/react.png" alt="React" />
                            <img src="/assets/sketch.png" alt="Sketch" />
                            <img src="/assets/js.png" alt="Javascript" />
                        </div>
                    </div>
                    <h4 className='skills-header'>Interest</h4>
                    <div className="interest">
                        <p>Design Trends</p>
                        <hr className='divider' />
                        <p>Technology</p>
                    </div>
                </motion.div>

                <motion.div className="experience-item" variants={fadeInUp} whileHover={{ scale:1.02 }}>
                    <h4 className="skills-header">Soft Skills</h4>
                    <div className="text-items">
                        <div className='text-item'>
                            <p>Teamwork</p>
                            <p>Communication</p>
                        </div>
                        <hr className="divider-2" />
                        <div className="text-item">
                            <p>Critical Thinking</p>
                            <p>Time Management</p>
                        </div>
                    </div>
                    <h4 className="skills-header">Skill Set</h4>
                    <div className='text-items'>
                        <div className="text-item">
                            <p>User Research</p>
                            <p>Wireframing</p>
                            <p>Brainstorming</p>
                        </div>
                        <hr className="divider-2" />
                        <div className='text-item'>
                            <p>Prototyping</p>
                            <p>App Design</p>
                            <p>Web Development</p>
                        </div>
                    </div>
                    <h4 className="skills-header">Language</h4>
                    <div className="interest">
                        <p>English</p>
                        <hr className='divider' />
                        <p>Somali</p>
                    </div>
                </motion.div>
            </div>
        </section>
    </motion.div>
  )
}

export default Skills