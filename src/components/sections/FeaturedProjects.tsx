import React from "react";
import { SectionHeading } from "src/components/typography/Heading";
import styled from "styled-components/macro";
import { Fade } from "react-awesome-reveal";
import { Link } from "src/components/ui/Link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { borderColor, linkBlueColor } from "src/styles/theme";
import project1Image from "src/assets/images/project1.png";
import project2Image from "src/assets/images/project2.png";

const Wrapper = styled.section`
  padding: 10rem 0;
  margin: 0 auto;
  max-width: 100rem;
`;

const ProjectsList = styled.ul`
  list-style: none;

  & > li {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    &:not(:last-of-type) {
      margin-bottom: 10rem;
    }

    &:nth-of-type(2n) {
      .project-content {
        grid-column: 7 / -1;
        text-align: right;
      }

      .project-image {
        grid-column: 1 / 8;
      }

      .project-tech-list {
        justify-content: flex-end;

        li {
          margin: 0px 0px 5px 2rem;
        }
      }

      .project-links {
        a {
          margin-left: 1rem;
          margin-right: 0;
        }
      }
    }
  }
`;

const ProjectContent = styled.div`
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
`;

const ProjectOverline = styled.div`
  margin: 1rem 0px;
  color: ${linkBlueColor};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;
`;

const ProjectTitle = styled.div`
  margin-bottom: 2rem;
  font-size: clamp(24px, 5vw, 28px);
  font-weight: 600;
  line-height: 1.1;
`;

const ProjectDescription = styled.div`
  position: relative;
  padding: 2.5rem;
  z-index: 2;
  border-radius: var(--border-radius);
  background-color: ${borderColor};
  font-size: var(--fz-lg);
  box-shadow: var(--shadow);
  transition: var(--transition);
`;

const ProjectTechList = styled.ul`
  margin: 2.5rem 0px 1rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  list-style: none;
  font-size: var(--fz-sm);

  & li {
    margin: 0px 2rem 5px 0px;
  }
`;

const ProjectLinks = styled.div`
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    margin-left: 0;
    font-size: var(--fz-sm);

    & svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-top: -4px;
    }
  }
`;

const ProjectImage = styled.div`
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
  transition: var(--transition);

  & img {
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
  }
`;

export const FeaturedProjects: React.FC = () => {
  return (
    <Fade>
      <Wrapper id="projects">
        <SectionHeading>Some Things I’ve Built</SectionHeading>
        <ProjectsList>
          <li>
            <ProjectContent className="project-content">
              <ProjectOverline>Featured Project</ProjectOverline>
              <ProjectTitle>Rainbow For Desktop</ProjectTitle>
              <ProjectDescription>
                A cross-platform desktop application for Rainbow which is a user
                friendly new WebRTC-based real time communication platform
              </ProjectDescription>
              <ProjectTechList className="project-tech-list">
                <li>Electron</li>
                <li>Node.js</li>
                <li>C++</li>
              </ProjectTechList>
              <ProjectLinks className="project-links">
                <Link href="https://web.openrainbow.com">
                  <FiExternalLink />
                </Link>
              </ProjectLinks>
            </ProjectContent>

            <ProjectImage className="project-image">
              <img src={project1Image} alt="Rainbow For Desktop" />
            </ProjectImage>
          </li>

          <li>
            <ProjectContent className="project-content">
              <ProjectOverline>Featured Project</ProjectOverline>
              <ProjectTitle>Better GitHub Profile</ProjectTitle>
              <ProjectDescription>
                Generates a nice looking website using your GitHub profile data.
                It's the tool I'm using right now to generate this website
              </ProjectDescription>
              <ProjectTechList className="project-tech-list">
                <li>React</li>
                <li>Styled Components</li>
                <li>GitHub GraphQL API</li>
              </ProjectTechList>
              <ProjectLinks className="project-links">
                <Link href="https://github.com/aabuhijleh/better-github-profile">
                  <FiGithub />
                </Link>
                <Link href="https://aabuhijleh.com">
                  <FiExternalLink />
                </Link>
              </ProjectLinks>
            </ProjectContent>

            <ProjectImage className="project-image">
              <img src={project2Image} alt="Better GitHub Profile" />
            </ProjectImage>
          </li>
        </ProjectsList>
      </Wrapper>
    </Fade>
  );
};