import React from "react";

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Img, Intro, Tag, TagList, TitleContent, UtilityList } from "./ProjectsStyles";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
    return (
        <Section nopadding id="projects">
            <SectionDivider/>
                <SectionTitle main>Projects</SectionTitle>
                <GridContainer>
                    {projects.map(({id, image, title, description, tags, source, visit}) => (
                        <BlogCard key={id}>
                            <Img src={image}/>
                            <TitleContent>
                                <HeaderThree title="true">{title}</HeaderThree>
                                <Hr/>
                            </TitleContent>
                            <CardInfo>{description}</CardInfo>
                            <div>
                                <TitleContent>
                                    <TagList>
                                        {tags.map((tag, i)=>(
                                            <Tag key={i}>{tag}</Tag>
                                        ))}
                                    </TagList>
                                </TitleContent>
                            </div>
                            <UtilityList>
                                <ExternalLinks href={visit} target="_blank">Code</ExternalLinks>
                            </UtilityList>
                        </BlogCard>
                    ))}
                </GridContainer>
        </Section>
    )
};

export default Projects;