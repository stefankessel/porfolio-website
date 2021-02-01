import React from 'react'
import { StyledAbout, AboutSubtitle, AboutContent, AboutText, Container, TimelineWrapper } from './StyledAbout'
import Timeline from '../../components/Timeline/Timeline';

const About = () => {
    return (
        <Container>
            <h1>A bit about <span>myself</span></h1>
            <StyledAbout>
                <img src='/images/about-profile.jpg' alt='Stefan Kessel'/>
                <AboutContent>
                    <AboutSubtitle>just a <span>bit</span></AboutSubtitle>

                    <AboutText>So,<br/>I’m Stefan — a Fullstack Developer in Berlin.<br/><span>I love modern technologies such as</span><br/><span>React or Progessive Web Apps</span><br/><span>and believe Blockchain is the future of the internet</span></AboutText>

                    <AboutSubtitle>I am also interested in</AboutSubtitle>
                    <AboutText>Cyber-Security,<br/><span>E-Commerce,</span><br/><span>Chess<br/></span><span>and Cycling</span></AboutText>                    
                </AboutContent>
            </StyledAbout>
            <TimelineWrapper>
                <h2 style={{paddingBottom: '.8em'}}>My Journey to Software</h2>
                <Timeline />
            </TimelineWrapper>
        </Container>
    )
}

export default About
