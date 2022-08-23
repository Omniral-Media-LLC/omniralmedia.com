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
  ListTitle, TeamContainer, TeamItem, TeamSection, TopList,
  TopListContainer,
  TopListItem, TopListParagraph, TopListTitle
} from './AboutStyles';
import Team from '../../images/team.svg';
import CameronScott from '../../images/cameron_scott.png';
import Default from '../../images/default.png';
import {Button} from "../../styles/GlobalComponents/Button";

const Technologies = () =>  (
  <Section id="tech" style={{ marginTop: '150px'}}>
    <SectionTitle>About Us</SectionTitle>
    <SectionText>
      Expert web development to drive digital innovations
    </SectionText>
    <TopListParagraph>
      When you chose Omniral Media, you can be sure we do things right, the first time. We exceed by exceeding your expectations. We are driven to bring great web development and web design projects to life. We deliver results.
    </TopListParagraph>
    <TopList style={{ marginTop: '10rem' }}>
      <TopListItem>
        <TopListContainer>
          <div>
            <div style={{ width: '100%',textAlign: 'center' }}>
              <TopListTitle>Who are we?</TopListTitle>
            </div>
            <TopListParagraph>
              Our story started in 2017 as CamScott.me, when Founder, President & CEO, Cameron Scott, was a freelance developer. As a child he gravitated towards technology, starting his career as an IT Technician in 2012, later on he founded a new passion for web design & development, and the history books were sealed. Omniral is a hybrid worker-owned cooperative that will care about its employees as much as it cares about its clients. He teamed up with Chief Technical Officer, Zac Jones and in 2022 the company officially became Omniral Media LLC, more commonly known simply as omniral.
            </TopListParagraph>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Team.src} alt="Team" width="80%" />
          </div>
        </TopListContainer>
      </TopListItem>
    </TopList>
    <List style={{ marginBottom: '8rem'}}>
      <ListItem>
        <ListContainer>
          <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <ListTitle>True Partnership</ListTitle>
            </div>
            <ListParagraph>
              Our developers enjoy using code to bring designs to life, and working to continually improve both the design and development process. We don’t just work with you, we become part of the same team.
            </ListParagraph>
          </div>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <ListTitle>Project Security</ListTitle>
            </div>
            <ListParagraph>
              Sleep well at night knowing your website or application is in good hands. Break fixes will always be free. We have the ability to secure and host your project and offer maintenance plans to go along with any digital project.
            </ListParagraph>
          </div>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <ListTitle>Proven Process</ListTitle>
            </div>
            <ListParagraph>
              We understand digital technology, and we understand the process. We will bring your project to life through our proven process of Discovery, Proposal, Design, Development and Deployment.
            </ListParagraph>
          </div>
        </ListContainer>
      </ListItem>
    </List>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '4rem' }}>
      <div>
        <SectionTitle>Meet the Team</SectionTitle>
      </div>
    </div>
    <TeamSection>
      <TeamContainer>
        <TeamItem>
          <img src={CameronScott.src} alt="Cameron Scott" />
          <ListTitle>Cameron Scott</ListTitle>
          <ListParagraph>
            President & CEO <br /> Software Engineer
          </ListParagraph>
        </TeamItem>
        <TeamItem>
          <img src={Default.src} alt="Cameron Scott" />
          <ListTitle>Zac Jones</ListTitle>
          <ListParagraph>
            Chief Technical Officer <br />
            Software Engineer
          </ListParagraph>
        </TeamItem>
      </TeamContainer>
    </TeamSection>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button link="/start-a-project">Start a Project</Button>
    </div>
  </Section>
);

export default Technologies;
