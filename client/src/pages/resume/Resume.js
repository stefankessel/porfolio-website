import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'
import { ResumeContainer, DownloadWrapper} from './StyledResume';
import Skills from '../../components/resume/skills/Skills';
import Education from '../../components/resume/education/Education';
import { Button } from '../../components/button/Button'

const Resume = ({history}) => {

    const isAuth = useSelector(state => state.auth);

    const sections = [ 'Skills', 'Education'];

    useEffect( () => {
        if(!isAuth){
            history.push('/login')
        }
    },[isAuth, history])

    return (
        <ResumeContainer>
            <h1>Resume</h1>
            <ul>
                {sections.map( s => (
                    <li key={s}><a href={`#${s.toLowerCase()}`}>{s}</a></li>
                ))}
            </ul>
            <DownloadWrapper>
                <h3>Or just download my CV:</h3>
                <a href="/api/download" target="_blank"><Button bg='#4285F4'>Download</Button></a>
            </DownloadWrapper>
            <Skills/>
            <Education/>
        </ResumeContainer>
    )
}

export default Resume
