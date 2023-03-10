import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
    { number: 20, text: 'Open Source Projects'},
    { number: 1000, text: 'Students', },
    { number: 100, text: 'Github Followers', },
    { number: 100, text: 'Github Stars', },
];

export const Acomplishments = () => (
    <Section>
        <SectionTitle>Personal Acomplishments</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    <BoxNum>{card.number}</BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
        <SectionDivider/>
    </Section>
    
);