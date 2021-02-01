import React from 'react';
import {data} from '../../data/timelineData';
import TimelineItem from './TimelineItem'
import { TimelineContainer } from './TimelineStyles'

const Timeline = () => data.length > 0 && (
        <TimelineContainer>
            {data.map( (item, i) => (
                <TimelineItem data = {item} key= {i} />
            ))}
        </TimelineContainer>
    )


export default Timeline
