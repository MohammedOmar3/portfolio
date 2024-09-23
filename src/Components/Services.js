import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Services = () => {
    const fadeIn = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut'} },
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: '-100px' });

  return (
    <motion.section id="services" ref={sectionRef} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeIn}>
        <p>Services I provide.</p>
        <h2>Modern &amp; Intuitive Web <br /> Solution Agency</h2>
        <motion.div className="service-container" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeIn}>
            {[
                { img: '/assets/webdesign.svg', title: 'Web Design'},
                { img: '/assets/ui.svg', title: 'UI/UX Design'},
                { img: '/assets/software.svg', title: 'Software Structure' },
                { img: '/assets/product.svg', title: 'Product Design' },
                { img: '/assets/graphic.svg', title: 'Graphic Design' },
                { img: '/assets/ux.svg', title: 'UI/UX Development' },
                { img: '/assets/seo.svg', title: 'SEO' },
                { img: '/assets/brand.svg', title: 'Brand Strategy' },
            ].map((service, index) => (
                <motion.div className="service-item" key={index} variants={fadeIn} whileHover={{ scale: 1.05 }}>
                    <img src={service.img} alt={service.title} />
                    <h4>{service.title}</h4>
                    <span>We do {service.title}</span>
                </motion.div>
            ))}
        </motion.div>
    </motion.section>
  );
};

export default Services;