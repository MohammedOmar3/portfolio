import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CompanyLogo from './CompanyLogo'

const Contact = () => {
    const fadeIn = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut'} },
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: '-100px' });

  return (
    <div>
        <section id="contact" className="contact-section">
            <motion.h1 className="contact-header" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px'}}>
                Contact Me
            </motion.h1>
            <motion.form className='contact-form' variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="Email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </motion.form>
        </section>

        {/* <section id="company-logos" className='logos-section'>
            <motion.h2 className='logos-header' variants={fadeIn} initial="hidden" whileInView="visible" viewPort={{ once: true, margin: '-50px' }}>
                Our Partners
            </motion.h2>
            <motion.h2 className='logos-header' variants={fadeIn} initial="hidden" whileInView="visible" viewPort={{ once: true, margin: '-50px' }}>
                <CompanyLogo />
            </motion.h2>
        </section> */}
    </div>
  );
}

export default Contact
