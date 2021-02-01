import React from 'react';
import { StyledTimelineItem, ItemContent } from './TimelineStyles'

const TimelineItem = ({data}) => {
    return (
        <StyledTimelineItem>
            <ItemContent >
                <span style={{background: data.category.color}}>{data.category.tag}</span>
                <time>{data.date}</time>
                <p>{data.text}</p>
                {data.link && (
                    <a href={data.link.url} target='_blank' rel='noreferrer'>{data.link.text} &#10148;</a>
                )}
                <span></span>
            </ItemContent >
        </StyledTimelineItem>
    )
}

export default TimelineItem;