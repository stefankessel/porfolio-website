import React from 'react'
import { SingleDegree } from './StyledEducation';

const Degree = (props) => {
    const { school, degree, link, image, start, finish} = props.degree;
    return (
        <SingleDegree>
            <div>
                <a href={link} target='_blank' rel='noreferrer'><img src={image} alt={school}/></a>
                </div>
            <div>
                <h3>{degree}</h3>
                <p>{school}</p>
                <p>{start} - {finish || 'currently'}</p>
            </div>
        </SingleDegree>
    )
}

export default Degree
