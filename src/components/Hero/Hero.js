import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Button } from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding style={{ marginTop: '-20px' }}>
      <LeftSection>
        <SectionTitle main center>
          Professional<br />
          web design &<br />
          development
        </SectionTitle>
        <SectionText>
          At Omniral Media, our mission is to simplify technology by offering innovative solutions that address your unique business challenges. As a comprehensive custom software development company, we specialize in providing advanced technological expertise to bring your digital aspirations to life. Our dedicated team crafts personalized web-based solutions, including content management systems, web applications, and tailored maintenance strategies, perfectly aligned with the requirements of your digital ventures.        </SectionText>
        <Button link="#contact" onClick={props.handleClick}>Get Started</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;