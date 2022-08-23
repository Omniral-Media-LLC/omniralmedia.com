import React from 'react';
import {
  DiBugsense,
  DiCompass,
  DiFirebase, DiGitCompare, DiEclipse,
  DiGoogleAnalytics,
  DiGoogleCloudPlatform, DiMarkdown,
  DiPhotoshop,
  DiReact,
  DiWordpress,
  DiZend
} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle, TopList,
  TopListContainer,
  TopListItem, TopListParagraph, TopListTitle
} from './StartProjectStyles';
import Seo from '../../images/seo.svg';
import SocialMedia from '../../images/social_media.svg';
import Maintenance from '../../images/maintenance.svg';
import Applications from '../../images/development.svg';
import UiUx from '../../images/ui_ux.svg';
import {Button} from "../../styles/GlobalComponents/Button";
import Contact from "../Contact/Contact";

const Technologies = () =>  (
  <>
    <Section id="tech" style={{ marginTop: '150px'}}>
      <SectionTitle>Start a Project</SectionTitle>
      <SectionText>
        Get in touch with our team to learn how our expert web developers can make your digital dreams come true
      </SectionText>
    </Section>
    <Contact />
  </>
);

export default Technologies;
