import React from "react";

import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  ImageContainer,
  List,
  ListContainer,
  ListIcon,
  ListItem,
  ListParagraph,
  ListTitle,
  MainImage,
} from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have worked with various technologies in both backend and frontend to improve my development and apps.
      </SectionText>
      <List>
        <ListItem>
            <DiReact size="3rem"/>
            <ListContainer>
                <ListTitle>FrontEnd</ListTitle>
                <ListParagraph>
                    Experience with <br/>
                    React JS
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <DiFirebase size="3rem"/>
            <ListContainer>
                <ListTitle>Backend</ListTitle>
                <ListParagraph>
                    Experience with <br/>
                    Node, Django RF, SpringBoot and databases
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <DiZend size="3rem"/>
            <ListContainer>
                <ListTitle>UI/UX</ListTitle>
                <ListParagraph>
                    Experience with <br/>
                    Tools like figma
                </ListParagraph>
            </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
