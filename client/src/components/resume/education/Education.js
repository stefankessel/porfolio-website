import React from 'react';
import { EducationContainer, DegreeContainer } from './StyledEducation'
import Degree from './Degree';
import { degrees } from '../../../data/resume/degrees';

const Education = () => {
    return (
        <EducationContainer>
            <h3 id='education'>Education</h3>
            <DegreeContainer>
                {degrees.map( degree => (
                    <Degree key={degree.degree} degree={degree}/>
                ))}
            </DegreeContainer>
        </EducationContainer>
    )
}

export default Education
