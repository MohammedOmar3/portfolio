import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Avatar from '../assets/avatar.png';

const Resume = () => {
    // Data for timeline and bio content
    const timelineData = [
        {
            year: "2018",
            bio: "Graduated with a Computer Science degree from XYZ University.",
            objective: "Start a career in software development and build foundational skills.",
        },
        {
            year: "2019",
            bio: "Worked at ABC Company as a Junior Developer.",
            objective: "Learn modern frameworks and contribute to real-world projects.",
        },
        {
            year: "2021",
            bio: "Joined DEF Corporation as a Software Engineer.",
            objective: "Focus on full-stack development and work on larger scale projects.",
        },
        {
            year: "2023",
            bio: "Started freelancing and developing personal projects.",
            objective: "Build my personal brand and work on independent, challenging projects.",
        }
    ];

    // State to track the selected timeline item
    const [selectedYear, setSelectedYear] = useState(timelineData[0]);

    // Animation settings
    const fadeIn = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut'} },
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: '-100px' });

    // Function to handle the timeline click
    const handleTimelineClick = (year) => {
        const selectedData = timelineData.find(item => item.year === year);
        setSelectedYear(selectedData);
    };

    return (
        <motion.div id="resume" ref={sectionRef} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            {/* Horizontal Timeline */}
            <div className="timeline-container">
                <div className="timeline-line"></div>
                <ul className="timeline">
                    {timelineData.map((item) => (
                        <li 
                            key={item.year}
                            className={`timeline-item ${selectedYear.year === item.year ? 'active' : ''}`} 
                            onClick={() => handleTimelineClick(item.year)}
                        >
                            <span className="timeline-date">{item.year}</span>
                            <span className="timeline-circle"></span>
                        </li>
                    ))}
                </ul>
            </div>

            <section>
                <div className="about">
                    <motion.div className="about-item" variants={fadeIn} whileFocus={{ scale: 1.02 }}>
                        <h1>About Me</h1>
                        {/* Dynamically updated bio content */}
                        <p className="bio">
                            Hello! My name is <span>Mohammed Omar.</span> <br />
                            {selectedYear.bio}
                        </p>

                        {/* Dynamically updated objective */}
                        <p className="bio">
                            <span>My Objective:</span> {selectedYear.objective}
                        </p>

                        <h4 className="contact">Contact</h4>
                        <div className="contact-links">
                            <div className="contact-items">
                                <a href="mailto:o.mohammed3@hotmail.com">o.mohammed3@hotmail.com</a><br />
                                <a href="https://linkedin.com">LinkedIn.com/MohammedOmar</a>
                            </div>

                            <div className="contact-items">
                                <a href="tel:+447494140582">+44 7494 1405 82</a>
                                <a href="https://omxmd.hashnode.dev">omxmd.hashnode.dev</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div className="about-item" variants={fadeIn} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }}>
                        <img src={Avatar} alt="Profile of Mohammed Omar" />
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

export default Resume;
