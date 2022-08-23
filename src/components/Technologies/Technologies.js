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
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech" style={{ margin: '0 0 8rem 0' }}>
    <SectionDivider divider />
    <SectionTitle>Expertise</SectionTitle>
    <SectionText>
      Let us do the hard part.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiWordpress size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>WordPress</ListTitle>
          <ListParagraph>
            Custom tailored responsive WordPress websites
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Applications</ListTitle>
          <ListParagraph>
            We are experienced with C# .Net, React, Node, GraphQL and Sanity.io
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPhotoshop size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Modern user experiences and interfaces
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGoogleAnalytics size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>SEO</ListTitle>
          <ListParagraph>
            Get seen first on search results such as Google and Bing
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCompass size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Social Media</ListTitle>
          <ListParagraph>
            Social Media Marketing - get Facebook, LinkedIn, and more setup
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
