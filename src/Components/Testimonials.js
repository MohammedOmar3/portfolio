import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';

const Testimonials = () => {

    const TestimonialsData = [
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO, Company A',
            image: '',
            testimonial: 'This service is outstanding! Highly recommend to everyone looking for top-notch quality.',

        },
        {
            id: 2,
            name: 'Doe John',
            position: 'Developer, Company B',
            image: '',
            testimonial: 'Amazing experience working with Mohammed, exceeded my expectations.',

        },
        {
            id: 3,
            name: 'Dohn Joe',
            position: 'UX Designer, Company C',
            image: '',
            testimonial: 'Nothing short from professional. Would recommend.',

        },
    ]

    const fadeIn = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut'} },
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: '-100px' });


  return (
    <Swiper 
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="testimonialSwiper"
        breakpoints={{
            640:{
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        }}
    >
        {TestimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
                <motion.div className="testimonial-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                    <div className="testimonial-context">
                        <p className="testimonial-text">{testimonial.testimonial}</p>
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-position">{testimonial.position}</p>
                    </div>
                </motion.div>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Testimonials