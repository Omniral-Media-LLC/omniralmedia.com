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
  DiZend, DiResponsive, DiPhonegap
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
} from './CareersStyles';
import Jobs from '../../images/jobs.svg';
import {Button} from "../../styles/GlobalComponents/Button";

const Technologies = () =>  (
  <Section id="tech" style={{ marginTop: '150px'}}>
    <SectionTitle>Careers</SectionTitle>
    <SectionText>
      A progressive hybrid worker owned cooperative that cares about its employees, where you own the means of production, not just the top executives.
    </SectionText>
    <TopList>
      <TopListItem>
        <TopListContainer>
          <div>
            <div style={{ width: '100%',textAlign: 'center' }}>
              <picture>
                <DiPhonegap size="10rem" />
              </picture>
              <TopListTitle>Jobs</TopListTitle>
            </div>
            <TopListParagraph>
              While we are currently not hiring, drop us a resume below to be added to the list of applicants once a position becomes available
            </TopListParagraph>
            <input type="file" />
            <Button>Submit Resume</Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Jobs.src} alt="WordPress" width="80%" />
          </div>
        </TopListContainer>
      </TopListItem>
    </TopList>
    <SectionText style={{ width: '100%', maxWidth: '100%' }}>
      Normalize the four day, ten hour work week. You deserve a three day break.
    </SectionText>
    <SectionText style={{ width: '100%', maxWidth: '100%' }}>
      Normalize paid paternity and maternity leave. You have a new child, and you deserve to spend time with him or her.
    </SectionText>
    <SectionText style={{ width: '100%', maxWidth: '100%' }}>
      We will pay your premiums and deductibles.
    </SectionText>
    <SectionText style={{ width: '100%', maxWidth: '100%' }}>
      We are 100% worker owned, you own the means of production, and have a vote on large company decisions.
    </SectionText>
    <SectionText style={{ width: '100%', maxWidth: '100%' }}>
      Work shouldn't burn you out, you deserve four weeks of paid vacation and sick pay.
    </SectionText>
    <SectionText style={{ width: '100%', maxWidth: '100%' }}>
      Year end bonuses are dispersed evenly throughout the organization, regardless of your position.
    </SectionText>
    <SectionText style={{ width: '100%', maxWidth: '100%' }}>
      Do these benefits make you think this Omniral Media would be one of the best places to work? Good want you.
    </SectionText>
  </Section>
);

export default Technologies;
