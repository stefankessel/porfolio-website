import React from 'react';
import { StyledSingleSkill } from './StyledSkills'

const SingleSkill = ({data, categories}) => {
    const {title, category} = data;

    const titleBG = categories.filter( cat => category.includes(cat.name)).map(cat => cat.color)

    return (
        <StyledSingleSkill bg={titleBG[0]}>
            {title}
        </StyledSingleSkill>
    )
}

export default SingleSkill
