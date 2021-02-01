import React from 'react';
import { Link } from 'react-router-dom'
import { StyledBackground, ButtonGroup, HeroLeft, HeroRight, HeroHeader, Sep, HeroSubheader } from './style';
import { Button } from '../../components/button/Button';

const Landing = () => {

    return (
        <StyledBackground>
            <HeroLeft>
                <HeroHeader>
                    Individual Software­ Development
                </HeroHeader>
                <Sep></Sep>
                <HeroSubheader>
                    Stefan Kessel - Software Developer
                </HeroSubheader>
                <ButtonGroup>
                    <Link to ="/contact"><Button>Contact Stefan</Button></Link>  
                </ButtonGroup>
            </HeroLeft>
            <HeroRight>
                <img src='/images/pablo/pablo-a-5-star.png' alt='Stefan Kessel Software Developer' />
            </HeroRight>
        </StyledBackground>
    )
}

export default Landing
