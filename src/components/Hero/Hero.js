import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Button } from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding style={{ marginTop: '-80px' }}>
      <LeftSection>
        <SectionTitle main center>
          Professional<br />
          web design &<br />
          development
        </SectionTitle>
        <SectionText>
          At Omniral Media, we strive to uncomplicate the world of technology by solving business challenges with custom web-based solutions. We are a full-service custom software development firm, providing technological expertise for your digital needs & dreams. We develop tailored content managed websites and maintenance plans to fit any digital project.
        </SectionText>
        <Button link="#contact" onClick={props.handleClick}>Get Started</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;