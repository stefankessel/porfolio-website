import React from 'react'
import { FooterWrapper } from './StyledFooter';
import { FaLinkedinIn, FaXing, FaGithub, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {

    const iconStyle = {
        fontSize: '1em',
        color: 'red',
    }
    return (
        <FooterWrapper>
            <div>
                <p>&#169; Stefan Kessel {new Date().getFullYear()}</p>
                <p>Made with <FaHeart style={iconStyle}/> in Berlin</p>
            </div>
            <div>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn size="1.6em"/></a>
                <a href="https://xing.de" target="_blank" rel="noreferrer"><FaXing size="1.6em"/></a>
                <a href="https://github.com/stefankessel/" target="_blank" rel="noreferrer"><FaGithub size="1.6em"/></a>
                <Link to="/contact">Contact</Link>
                <Link to="/terms-privacy">Privacy and Terms</Link>
            </div>

        </FooterWrapper>
    )
}

export default Footer
