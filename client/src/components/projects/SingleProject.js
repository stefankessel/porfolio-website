import React from 'react'
import { ImgWrapper, Container } from './StyledSingleProject';
import { Button } from '../button/Button';

const SingleProject = ({project}) => {
    const {title, image, link, tags, desc} = project
    return (
        <Container>
        <h3>{title}</h3>
        <ImgWrapper>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={`${process.env.PUBLIC_URL}${image}`} alt={title} />
            </a>
            <ul>
                {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </ImgWrapper>
        <p>{desc}</p>
        <p><a href={link} target="_blank" rel="noreferrer"><Button bg='#4285F4'>Check it out!</Button></a></p>
        </Container>
    )
}

export default SingleProject
