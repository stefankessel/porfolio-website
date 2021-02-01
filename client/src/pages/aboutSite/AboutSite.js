import React, {useState, useEffect} from 'react';
import { Container, StackWrapper, StatsWrapper } from './StyledAboutSite';
import { techs } from '../../data/siteStats';
import { FaHeart} from "react-icons/fa";

const AboutSite = () => {

    const [age, setAge] = useState();

    const tick = () => {
      const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
      const launchTime = new Date('2021-01-01T08:00:00');
      setAge(((Date.now() - launchTime) / divisor).toFixed(9));
    }

    useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
        clearInterval(timer);
    };
    }, []);

    const iconStyle = {
        fontSize: '0.7em',
        color: 'red',
    }

    return (
        <Container>
                <h1>I <FaHeart style={iconStyle}/> technologies</h1>
                <p>This Website was build with the John Wick Stack:</p>
                <StackWrapper>
                    {techs.map( tech => (
                        <span key={tech}>{tech.toUpperCase()}</span>
                    ))}
                </StackWrapper>
                <StatsWrapper>
                    <h3>Some Stats About This Site</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Coded in</td>
                                <td>Berlin</td>
                            </tr>
                            <tr>
                                <td>Very Current Age in Years</td>
                                <td style={{width:'60%'}}>{age}</td>
                            </tr>
                        </tbody>
                    </table>
                </StatsWrapper>
        </Container>
    )
}

export default AboutSite
