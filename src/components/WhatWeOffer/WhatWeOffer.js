import React from 'react';
import {
  DiCompass,
  DiFirebase, DiGo,
  DiGoogleAnalytics,
  DiGoogleCloudPlatform, DiMarkdown,
  DiPhotoshop,
  DiReact,
  DiWordpress,
  DiZend
} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './WhatWeOfferStyles';
import Seo from '../../images/seo.svg';
import SocialMedia from '../../images/social_media.svg';
import WordPress from '../../images/wordpress.svg';
import Applications from '../../images/development.svg';
import UiUx from '../../images/ui_ux.svg';
import {Button} from "../../styles/GlobalComponents/Button";

const Technologies = () =>  (
  <Section id="tech" style={{ marginTop: '150px'}}>
    <SectionTitle>What We Offer</SectionTitle>
    <SectionText>
      We offer custom-tailored web solutions for any project.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <div>
            <div style={{ width: '100%',textAlign: 'center' }}>
              <picture>
                <DiWordpress size="10rem" />
              </picture>
              <ListTitle>WordPress</ListTitle>
            </div>
            <ListParagraph>
              There are many options when it comes to Content Management Systems (CMS) and 455 million websites use WordPress making it the go-to for most projects. Our developers create pixel perfect code from design, and can train your team how to use WordPress.
            </ListParagraph>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={WordPress.src} alt="WordPress" width="80%" />
          </div>
        </ListContainer>
      </ListItem>
      <SectionDivider divider />
      <ListItem>
        <ListContainer>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Applications.src} alt="Applications" width="80%" />
          </div>
          <div>
            <div style={{ width: '100%',textAlign: 'center' }}>
              <picture>
                <DiReact size="10rem" />
              </picture>
              <ListTitle>Applications</ListTitle>
            </div>
            <ListParagraph>
              Wish you had an app for that? Omniral Media can help make your business more efficient and modern through custom application development. We can also improve the functionality of existing apps (developed by another company). Our ability in integrate frameworks, databases and languages enables us to address a variety of complex problems.
            </ListParagraph>
          </div>
        </ListContainer>
      </ListItem>
      <SectionDivider divider />
      <ListItem>
        <ListContainer>
          <div>
            <div style={{ width: '100%',textAlign: 'center' }}>
              <picture>
                <DiPhotoshop size="10rem" />
              </picture>
              <ListTitle>UI/UX</ListTitle>
            </div>
            <ListParagraph>
              At its core, great software is created when its primary users are brought to the forefront of design decisions. The in-house UX / UI team works seamlessly with the solutions architect team, and development team to bring a scalable, empathetic, and purposeful-driven design mindset to Apps, PWAs, and Sites. We figure out the issues with software before it goes into development.
            </ListParagraph>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={UiUx.src} alt="UI/UX" width="60%" />
          </div>
        </ListContainer>
      </ListItem>
      <SectionDivider divider />
      <ListItem>
        <ListContainer>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Seo.src} alt="SEO" width="65%" />
          </div>
          <div>
            <div style={{ width: '100%',textAlign: 'center' }}>
              <picture>
                <DiGoogleAnalytics size="10rem" />
              </picture>
              <ListTitle>SEO</ListTitle>
            </div>
            <ListParagraph>
              SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.
            </ListParagraph>
          </div>
        </ListContainer>
      </ListItem>
      <SectionDivider divider />
      <ListItem>
        <ListContainer>
          <div>
            <div style={{ width: '100%',textAlign: 'center' }}>
              <picture>
                <DiCompass size="10rem" />
              </picture>
              <ListTitle>Social Media</ListTitle>
            </div>
            <ListParagraph>
              At this point, we all know that successful businesses also have vibrant and active social media lives as well, but what makes social media so important to the long-term success of your business or brand? The quick answer is: because that’s where the people are. Gone are the days where customers took it upon themselves to seek out the service they require. In its place is a new way of communication. Consumers expect to have services come to where they are. While this might initially seem like a pain in the you-know-what, we can work this to our advantage as businesses. We now know where your customers are and can present them with an idea, service, or product that they never knew they always wanted. And we can do it in a very targeted way by enhancing our organic (free) social media posts with social media ads.
            </ListParagraph>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={SocialMedia.src} alt="Social Media Marketing" width="70%" />
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
