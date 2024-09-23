import React from 'react'
import Marquee from 'react-marquee-slider';
import Marque from 'react-marquee-slider';
import styled from "styled-components"

const CompanyLogo = () => {
    const logos = [
        './assets/brand-1.png',
        './assets/brand-2.png',
        './assets/brand-3.png',
        './assets/brand-4.png',
    ]

    const LogoContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 20px;
    `;

    const Logo = styled.img`
    width: 100px; // Adjust the width as needed
    height: auto;
    margin: 0 20px; // Add margin between logos
`;
    
  return (
    <div className="marquee-wrapper">
        <Marquee velocity={24} minScale={0.7} resetAfterTries={200}>
            {logos.map((logo, index) =>(
                <LogoContainer key={index}>
                    <Logo src={logo} alt={`Company Logo ${index}`} />
                </LogoContainer>
            ))}
        </Marquee>
    </div>
  )
}

export default CompanyLogo