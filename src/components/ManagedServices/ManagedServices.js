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
} from './ManagedServicesStyles';
import Seo from '../../images/seo.svg';
import SocialMedia from '../../images/social_media.svg';
import Maintenance from '../../images/maintenance.svg';
import Applications from '../../images/development.svg';
import UiUx from '../../images/ui_ux.svg';
import {Button} from "../../styles/GlobalComponents/Button";

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Managed Services</SectionTitle>
    <SectionText>
      Sleep well at night knowing your website or application is in good hands.
    </SectionText>
    <TopList>
      <TopListItem>
        <TopListContainer>
          <div>
            <div style={{ width: '100%',textAlign: 'center' }}>
              <picture>
                <DiGitCompare size="10rem" />
              </picture>
              <TopListTitle>What are Managed Services?</TopListTitle>
            </div>
            <TopListParagraph>
              Omniral Media will deploy, host, provide updates, and maintain security of your website or application. Managed WordPress hosting manages technical aspects of your site. This includes security, speed, WordPress updates, daily backups, website uptime, and more. The best WordPress hosts should be hassle-free, letting you focus on your business. WordPress is massive. In fact, WordPress powered 39.6% of the internet in 2021.
            </TopListParagraph>
            <TopListParagraph>
              If your site or application is down or offline due to an error, we will fix it for free, and always will.
            </TopListParagraph>
            <TopListParagraph>
              Take a look at our tiered plans below.
            </TopListParagraph>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Maintenance.src} alt="WordPress" width="80%" />
          </div>
        </TopListContainer>
      </TopListItem>
    </TopList>
    <List style={{ marginBottom: '8rem'}}>
      <ListItem>
        <ListContainer>
          <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <picture>
                <DiEclipse size="10rem" style={{color: '#ddbb85'}} />
              </picture>
              <ListTitle>Bronze</ListTitle>
            </div>
            <ListParagraph>
              <ul>
                <li style={{ marginBottom: '1rem'}}>- Four hours of after care development per month</li>
                <li style={{ marginBottom: '1rem'}}>- Monthly updates</li>
                <li style={{ marginBottom: '1rem'}}>- Break fixes are free, and always will be</li>
              </ul>
            </ListParagraph>
          </div>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <picture>
                <DiEclipse size="10rem" />
              </picture>
              <ListTitle>Silver</ListTitle>
            </div>
            <ListParagraph>
              <ul>
                <li style={{ marginBottom: '1rem'}}>- Eight hours of after care development per month</li>
                <li style={{ marginBottom: '1rem'}}>- Bi-weekly updates</li>
                <li style={{ marginBottom: '1rem'}}>- Break fixes are free, and always will be</li>
              </ul>
            </ListParagraph>
          </div>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <picture>
                <DiEclipse size="10rem" style={{ color: '#ffd700' }} />
              </picture>
              <ListTitle>Gold</ListTitle>
            </div>
            <ListParagraph>
              <ul>
                <li style={{ marginBottom: '1rem'}}>- Twelve hours of after care development per month</li>
                <li style={{ marginBottom: '1rem'}}>- Weekly updates</li>
                <li style={{ marginBottom: '1rem'}}>- Break fixes are free, and always will be</li>
              </ul>
            </ListParagraph>
          </div>
        </ListContainer>
      </ListItem>
    </List>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button link="/start-a-project">Start a Project</Button>
    </div>
  </Section>
);

export default Technologies;
