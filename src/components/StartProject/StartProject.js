import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SectionContact } from "./StartProjectStyles";
import Contact from "../Contact/Contact";
import Link from "next/link";

const Technologies = () =>  (
  <>
    <Section id="tech">
      <SectionTitle>Start a Project</SectionTitle>
      <SectionText>
        Get in touch with our team to learn how our expert web developers can make your digital dreams come true
      </SectionText>
      <SectionContact>Fill out the form below or call us at <Link href="tel:612-757-4334">(612) 757-4334</Link>.</SectionContact>
    </Section>
    <Contact />
  </>
);

export default Technologies;
