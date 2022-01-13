import React from 'react';
import { DiFirebase, DiReact, DiJavascript1,DiCss3,DiHtml5,DiPython } from 'react-icons/di';
import { SiMongodb,SiFlask } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Learning and applying front end skills such as HTML, CSS, JavaScript, React, back-end skills as NodeJS and MongoDB database</SectionText>
    <List>
      <ListItem>
      <picture>

        <DiReact size='3rem' />
        <DiJavascript1 size='3rem' />
        <DiCss3 size='3rem' />
        <DiHtml5 size='3rem' />
        <DiPython size='3rem' />
      </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js JavaScript HTML CSS3 Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <picture>
        <DiFirebase size='3rem' />
        <SiMongodb size='3rem' />
        <SiFlask size='3rem' />
      </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js Flask and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
