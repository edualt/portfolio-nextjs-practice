import React from "react";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

interface HeroProps {
  title?: string;
}

const Hero = (props: HeroProps) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a passionate developer tryng to improve my development skills and build awesome apps!
      </SectionText>
      <Button onClick={() => window.open('https://google.com')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;