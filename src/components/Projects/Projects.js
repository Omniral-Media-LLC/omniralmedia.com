import React from 'react';

import {
    FlexBlogCard,
    CardInfo,
    ExternalLinks,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
    FlexGridContainer
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projects</SectionTitle>
    <FlexGridContainer>
      {projects.map((p, i) => {
        return (
          <FlexBlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </FlexBlogCard>
        );
      })}
    </FlexGridContainer>
      <SectionDivider style={{ marginTop: '5rem', marginBottom: '3rem'}}/>
  </Section>
);

export default Projects;