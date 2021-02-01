import React from 'react';
import {Container, InfoBar, ContactBannerWrapper, BannerText, BannerImage, FormWrapper } from './style'
import Form from '../../components/Form/Form';
import { BsArrowRight } from "react-icons/bs";
import { FaLinkedinIn, FaXing, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <Container>
            <ContactBannerWrapper>
                <BannerText>
                    <h1>Contact Me</h1>
                    <p>What can I do for you?</p>
                </BannerText>
                <BannerImage>
                    <img src='/images/pablo/pablo-handshake.png' alt='Contact Stefan Kessel Webdeveloper' />
                </BannerImage>
            </ContactBannerWrapper>
            <FormWrapper>
                <InfoBar>
                    <div>
                        <h2>Let's talk</h2>
                        <BsArrowRight size="2em"/>                      
                    </div>
                    <div>
                        <h3>find me online:</h3>
                    
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn size="1.6em"/></a>
                        <a href="https://xing.de" target="_blank" rel="noreferrer"><FaXing size="1.6em"/></a>
                        <a href="https://github.com/stefankessel/" target="_blank" rel="noreferrer"><FaGithub size="1.6em"/></a>
                    </div>
                    <img src='/images/pablo/pablo-fashion.png' alt='Stefan Kessel Webdeveloper Kontakt Form'/>
                </InfoBar>
                <Form />
            </FormWrapper>
        </Container>
    )
}

export default Contact
