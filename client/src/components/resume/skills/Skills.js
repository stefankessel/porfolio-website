import React, {useState} from 'react';
import { StyledHeader, ButtonGroup, SkillContainer, SkillList } from './StyledSkills'
import { skills, colors } from '../../../data/resume/skills';
import SingleSkill from './SingleSkill';
import { Button } from '../../button/Button';

const Skills = () => {

    const [skillList, setSkillList] = useState(skills);

    // sort Categories 
    const categories = [ ...new Set(skills.reduce( (acc, {category}) => acc.concat(category), []))]
        .sort()
        .map( (cat, i) => ({
            name: cat,
            color: colors[i]
        }));

        

    const sortHandler = (name) => {
        if(name === 'All'){
            return setSkillList(skills);
        }

        let updatedSkills = skills.filter( skill => skill.category.includes(name)).map( skill => skill)
        setSkillList(updatedSkills);        
    }

    const getSkills = skillList.map(skill => (<SingleSkill 
                                                key ={skill.title} 
                                                categories = {categories}
                                                data = {skill}/>))     
        
    const buttons = categories.map( (cat) => (
        <div style = {{marginBottom:'15px'}} key={cat.name} onClick={() => sortHandler(cat.name)}><Button bg="#24292e">{cat.name}</Button></div>
    ))

    return (
        <>
            <StyledHeader>Skills</StyledHeader>
            <SkillContainer>
                <ButtonGroup>
                    <div style = {{marginBottom:'15px'}} onClick={() => sortHandler('All')}><Button bg="#24292e">All</Button></div>
                    {buttons}
                </ButtonGroup>          
                <SkillList>
                    {getSkills}
                </SkillList>
            </SkillContainer>
        </>
    )
}

export default Skills
